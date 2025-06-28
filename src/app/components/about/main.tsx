import SectionTag from "@/app/ui/section.tag";

export default function AboutSection(){
    return <section className="flex flex-col md:grid md:grid-cols-2 px-mobile md:px-base py-6">

        <div className="flex flex-col gap-2 items-start">
            <SectionTag>About Me</SectionTag>
            <h2>
                SOfTWARE ENGINEER meets ML & HARDWARE
            </h2>
        </div>

        <div className="flex flex-col gap-2 items-start pt-6">
            <p className="text-justify md:text-left">
                My work lives at the intersection of full-stack development, artificial intelligence, and creative hardware.
            </p>
            <p className="text-justify md:text-left">
                It all begins with a spark of curiosity—that 'what if?' moment that pulls me into a new technology or a complex problem. The real joy then comes from the process of building, shaping, and wiring that idea into something tangible and useful that I can share with others.
            </p>


            <div className="grid grid-cols-3 grid-rows-2 w-full mt-2">
                <span className="text-accent">EXPEREINCE</span>
                <span className="text-accent">EDUCATION</span>
                <span className="text-accent">LOCATION</span>

                <span>5+ Years</span>
                <span>HIT</span>
                <span>Harare</span>
            </div>

        </div>
        
    </section>
}