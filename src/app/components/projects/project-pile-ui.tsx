"use client"
import { useInView } from "motion/react"
import { useRef } from "react"

export default function ProjectPile({children} : {children: React.ReactNode}) {
    const ref = useRef(null)
    const isInView = useInView(ref, {amount:"all"});


    return <div ref={ref} data-inview={isInView} className="pile *:h-[20rem] *:*:p-1 *:*:px-1.5 *:*:uppercase *:*:w-fit *:nth-[2]:w-full *:nth-[2]:grid *:nth-[2]:grid-cols-[1fr_1fr] *:nth-[2]:grid-rows-[repeat(8,1fr)] *:nth-[2]:gap-0 *:nth-[2]:items-center *:nth-[2]:z-[2]">
        {children}
    </div>
}