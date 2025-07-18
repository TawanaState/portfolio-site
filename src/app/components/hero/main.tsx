import Banner from "./banner";
import Nav from "./nav";
import { TextScrambleComponent } from "@/app/ui/text-scamble";

export default function Hero() {
    return (
        <section id="hero" className="h-[100dvh] w-full grid grid-rows-3">
            <Nav />
            <div className="text-center place-self-center -translate-y-6 flex flex-col gap-1">
                <p className="text-center">On any given day I'm</p>

                <h1 className="font-secondary text-[3.2rem] leading-[3rem] h-[30vh] max-w-[95vw] md:text-[5.5rem] md:leading-[5.2rem] text-center md:max-w-[70vw] md:h-[16rem] text-wrap flex flex-row items-center justify-center overflow-clip">
                    <TextScrambleComponent
                        phrases={[
                            "ChAsing neW SpaRks",
                            "WiRing loGic iNto Life",
                            "BuilDing wHAt's NeXt",
                        ]}
                        scrambleDuration={100}
                        waitDuration={5000}
                        className="text-secondary place-self-center"
                    />
                </h1>

                <a href="https://github.com/TawanaState/" className="w-fit place-self-center group cursor-pointer my-0 py-0 px-4 text-lg flex flex-row items-center">
                    <span className="mr-1 text-3xl translate-y-0.5 font-thin">[</span>
                    <span>github</span>
                    <span className="mso inline-block translate-y-[2px] rotate-45 group-hover:rotate-90 transition-all">arrow_upward_alt</span>
                    <span className="text-3xl translate-y-0.5">]</span>
                </a>
            </div>

            <div className="place-self-end overflow-hidden -translate-y-12 -rotate-2">
                <Banner />
            </div>

            
        </section>
    );
}