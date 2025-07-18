"use client";
import { motion, useScroll, useSpring } from "motion/react";
import { useEffect } from "react";


export default function Banner(){
    const { scrollYProgress } = useScroll();
    const translateX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })
    useEffect(() => {
        console.log("SCROLLED : ", scrollYProgress);
    }, [scrollYProgress])

    return <motion.div style={{ translateX }} className="banner bg-accent text-background text-center items-center p-2 w-[100vw] font-bold text-nowrap">
                    SOFTWARE ENGINEER / WEB DEVELOPER / DESIGNER / MACHINE LEARNING ENGINEER / HARDWARE ENTHUSIAST / SOFTWARE ENGINEER / WEB DEVELOPER / DESIGNER / MACHINE LEARNING ENGINEER / HARDWARE ENTHUSIAST/ SOFTWARE ENGINEER / WEB DEVELOPER / DESIGNER / MACHINE LEARNING ENGINEER / HARDWARE ENTHUSIAST/ SOFTWARE ENGINEER / WEB DEVELOPER / DESIGNER / MACHINE LEARNING ENGINEER / HARDWARE ENTHUSIAST
                </motion.div>
}