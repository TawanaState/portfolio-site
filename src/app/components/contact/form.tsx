"use client";

import { useEffect, useRef } from "react";

export default function ContactForm() {

    // create ref for all the input elements and for the forom
    const formRef = useRef<HTMLFormElement|null>(null);
    const nameRef = useRef<HTMLInputElement|null>(null);
    const serviceRef = useRef<HTMLInputElement|null>(null);

    useEffect(() => {
        if (formRef.current) {
            formRef.current.onsubmit = (event) => {
                event.preventDefault();
                const name = (nameRef.current as unknown as HTMLInputElement).value;
                const service = (serviceRef.current as unknown as HTMLInputElement).value;
                let msg = "Hi. I'm " + name + ". And i need " + service
                let whatasppLink = `https://wa.me/+263785733582?text=${encodeURI(msg)}`;
                window.open(whatasppLink, "_blank");
            }
        }
    }, [])

    return <form ref={formRef} className="px-0 md:px-18 flex flex-col gap-0 md:gap-2 md:mt-9">
            <p>Hi, my name is</p>
            <input ref={nameRef} required type="text" placeholder="[Your name ]" className="big" />
            <p>And i need</p>
            <input ref={serviceRef} required type="text" placeholder={"["+ String.fromCharCode(8239) +"Service needed" + String.fromCharCode(8239) + "]"} className="big" />
            <button type="submit" className="big w-fit place-self-start group cursor-pointer">
                <span className="md:-mr-3 -mr-1">[</span>
                <span className="mso inline-block translate-y-1.5 rotate-45 group-hover:rotate-90 transition-all">arrow_upward_alt</span>
                <span className="md:-ml-3 -ml-1">]</span>
            </button>
    </form>
}