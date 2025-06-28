import Nav from "./nav";
import { TextScrambleComponent } from "@/app/ui/text-scamble";

export default function Hero() {
    return (
        <section id="hero" className="h-[100dvh] w-full grid grid-rows-3">
            <Nav />
            <div className="text-center place-self-center -translate-y-6 flex flex-col gap-1">
                <p className="text-center">On any given day I'm</p>
                <h1 className="font-secondary text-[3.2rem] leading-[3rem] h-[30vh] max-w-[90vw] md:text-[5.5rem] md:leading-[5.2rem] text-center md:max-w-[60vw] md:h-[12rem] text-wrap flex flex-row items-center justify-center overflow-clip">
                    <TextScrambleComponent
                        phrases={[
                            "Software Engineer",
                            "Web Developer",
                            "Designer",
                            "Machine Learning Engineer",
                            "Hardware Enthusiast"
                        ]}
                        scrambleDuration={100}
                        waitDuration={5000}
                        className="text-secondary place-self-center"
                    />
                </h1>
            </div>

            <div className="place-self-end overflow-hidden -translate-y-12 -rotate-2">
                <div className="banner bg-accent text-background text-center items-center p-2 w-[100vw] font-bold text-nowrap">
                    SOFTWARE ENGINEER / WEB DEVELOPER / DESIGNER / MACHINE LEARNING ENGINEER / HARDWARE ENTHUSIAST / SOFTWARE ENGINEER / WEB DEVELOPER / DESIGNER / MACHINE LEARNING ENGINEER / HARDWARE ENTHUSIAST/ SOFTWARE ENGINEER / WEB DEVELOPER / DESIGNER / MACHINE LEARNING ENGINEER / HARDWARE ENTHUSIAST/ SOFTWARE ENGINEER / WEB DEVELOPER / DESIGNER / MACHINE LEARNING ENGINEER / HARDWARE ENTHUSIAST
                </div>
            </div>

            
        </section>
    );
}
