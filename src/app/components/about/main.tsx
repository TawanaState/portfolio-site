import SectionTag from "@/app/ui/section.tag";

export default function AboutSection(){
    return <section id="about" className="flex flex-col md:grid md:grid-cols-2 px-mobile md:px-base py-28 pt-6">

        <div className="flex flex-col gap-2 items-start">
            <SectionTag>About Me</SectionTag>
            <h2>
                SOfTWARE ENGINEER meets ML & HARDWARE
            </h2>
        </div>

        <div className="flex flex-col gap-2 items-start pt-6">
            <p className="text-justify md:text-left">
                Hey there! I'm Tawananyasha Mukoriwo, and I'm basically a software engineer who gets a kick out of bringing ideas to life.
            </p>
            <p className="text-justify md:text-left">
                My real passion lies in bridging the digital and physical worlds. Whether I'm diving deep into machine learning algorithms or tinkering with hardware, I love seeing how code can interact with the tangible. It's all about building cool stuff and solving puzzles, one line of code (or wire) at a time!
            </p>


            <div className="grid grid-cols-3 grid-rows-2 w-full mt-2">
                <span className="text-accent">EXPEREINCE</span>
                <span className="text-accent">EDUCATION</span>
                <span className="text-accent">LOCATION</span>

                <span>5+ Years</span>
                <a href="https://hit.ac.zw/">HIT</a>
                <span>Harare</span>
            </div>

        </div>
        
    </section>
}