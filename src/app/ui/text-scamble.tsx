"use client";
import React, { useEffect, useRef } from 'react';

type TextScrambleOptions = {
  chars?: string
  scrambleDuration?: number
}

class TextScramble {
  el: HTMLElement
  chars: string
  scrambleDuration: number
  queue: Array<{ from: string, to: string, start: number, end: number, char?: string }>
  frame: number
  frameRequest: number
  resolve: () => void
  fullText: string

  constructor(el: HTMLElement, options: TextScrambleOptions = {}) {
    this.el = el
    this.chars = options.chars || '!<>-_\\/[]{}—=+*^?#________'
    this.scrambleDuration = options.scrambleDuration || 80
    this.update = this.update.bind(this)
    this.queue = []
    this.frame = 0
    this.frameRequest = 0
    this.resolve = () => {}
    this.fullText = ''
  }

  setText(newText: string) {
    const oldText = this.el.innerText
    const temp = document.createElement('div')
    temp.innerHTML = newText
    const newPlainText = temp.textContent || ''
    const length = Math.max(oldText.length, newPlainText.length)
    const promise = new Promise<void>((resolve) => (this.resolve = resolve))
    this.queue = []
    this.fullText = newText
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newPlainText[i] || ''
      const start = Math.floor(Math.random() * (this.scrambleDuration / 2))
      const end = start + Math.floor(Math.random() * (this.scrambleDuration / 2))
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }

  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    if (complete === this.queue.length) {
      this.el.innerHTML = this.fullText
      this.resolve()
    } else {
      this.el.innerHTML = output
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

type TextScrambleProps = {
  phrases: string[]
  scrambleDuration?: number
  className?: string
  style?: React.CSSProperties
  waitDuration?: number
}

export const TextScrambleComponent: React.FC<TextScrambleProps> = ({
  phrases,
  scrambleDuration = 50,
  waitDuration = 3000,
  className = '',
  style = {}
}) => {
  const elRef = useRef<HTMLDivElement>(null)
  const scrambleRef = useRef<TextScramble | null>(null)
  const counterRef = useRef(0)
  const timeoutRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    if (!elRef.current) return
    scrambleRef.current = new TextScramble(elRef.current, { scrambleDuration })
    let mounted = true

    const next = () => {
      if (!mounted || !scrambleRef.current) return
      scrambleRef.current.setText(phrases[counterRef.current]).then(() => {
        timeoutRef.current = window.setTimeout(next, waitDuration)
      })
      counterRef.current = (counterRef.current + 1) % phrases.length
    }

    next()

    return () => {
      mounted = false
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phrases, scrambleDuration])

  return (
    <div
      ref={elRef}
      className={`text-wrap text${className ? ' ' + className : ''}`}
      style={style}
    />
  )
}