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
                            "Chasing new sparks",
                            "Wiring logic into life",
                            "Architecting what's next",
                        ]}
                        scrambleDuration={100}
                        waitDuration={5000}
                        className="text-secondary place-self-center"
                    />
                </h1>
                
                <button className="bg-secondary text-background w-fit place-self-center my-5 py-2 px-4 uppercase [clip-path:polygon(85%_0,_100%_35%,_100%_100%,_0_100%,_0_0)] flex gap-2 items-center">
                    <span>
                        Github
                    </span>
                    <span className="mso !text-lg">north_east</span>
                </button>
            </div>

            <div className="place-self-end overflow-hidden -translate-y-12 -rotate-2">
                <div className="banner bg-accent text-background text-center items-center p-2 w-[100vw] font-bold text-nowrap">
                    SOFTWARE ENGINEER / WEB DEVELOPER / DESIGNER / MACHINE LEARNING ENGINEER / HARDWARE ENTHUSIAST / SOFTWARE ENGINEER / WEB DEVELOPER / DESIGNER / MACHINE LEARNING ENGINEER / HARDWARE ENTHUSIAST/ SOFTWARE ENGINEER / WEB DEVELOPER / DESIGNER / MACHINE LEARNING ENGINEER / HARDWARE ENTHUSIAST/ SOFTWARE ENGINEER / WEB DEVELOPER / DESIGNER / MACHINE LEARNING ENGINEER / HARDWARE ENTHUSIAST
                </div>
            </div>

            
        </section>
    );
}
