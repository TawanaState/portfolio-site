import SectionTag from "@/app/ui/section.tag";

const skills = [
    {
        name : "SOFTWARE",
        tags : ["nextjs", "typescript", "django", "golang", "postgresql", "deno", "docker", "tauri", "c#", "tailwindcss", "aws"]
    },
    {
        name : "MACHINE LEARNING",
        tags : ["python", "tensorflow", "pytorch", "onnx", "numpy", "pandas", "tfjs", "jax"]
    },
    {
        name : "HARDWARE",
        tags : ["arduino", "raspberry-pi", "esp32", "circuit-design", "embedded-systems", "robotics"]
    }
]

export default function Skills(){

    return(
        <section className="flex flex-col md:grid md:grid-cols-[5fr_2fr] md:gap-6 px-mobile md:px-base py-6 pb-12">
            <div className="flex flex-col gap-2 items-start">
                <SectionTag>Skills</SectionTag>
                <h2>
                    What's In My Toolkit?
                </h2>
                <p>
                    It all begins with a spark of curiosity—that 'what if?' moment that pulls me into a new technology or a complex problem. The real joy then comes from the process of building, shaping, and wiring that idea into something tangible and useful that I can share with others.
                </p>
            </div>

            <div className="skill-cards px-24 flex flex-col items-center gap-4">

                <div className="skill-card">
                    <div className="skill-card-clip">
                    </div>
                    <div className="skill-card-content">
                        <img className="-translate-y-2 -translate-x-0.5" src="/icons/code.svg" alt="Code Icon" />
                        <div className="py-2 px-4 ">
                            <ul className="items-end justify-end">
                                {skills[0].tags.map(tag => (
                                    <li key={tag + "--skill"}>{"[" + tag + "]"}</li>
                                ))}
                            </ul>
                            <h3 className="text-right">{skills[0].name}</h3>
                        </div>
                    </div>
                </div>

                <div className="skill-card">
                    <div className="skill-card-clip">
                    </div>
                    <div className="skill-card-content">
                        <div className="py-2 px-4">
                            <ul className="items-start justify-start pt-3">
                                <li className="px-2">{""}</li>
                                {skills[1].tags.map(tag => (
                                    <li key={tag + "--skill"}>{"[" + tag + "]"}</li>
                                ))}
                            </ul>
                            <h3 className="text-left line-clamp-1">{skills[1].name}</h3>
                        </div>
                        <img className="-translate-y-2 -translate-x-0.5" src="/icons/ml.svg" alt="ML Icon" />

                    </div>
                </div>


                <div className="skill-card">
                    <div className="skill-card-clip">
                    </div>
                    <div className="skill-card-content">
                        <img className="-translate-y-2 -translate-x-0.5" src="/icons/hardware.svg" alt="Hardware Icon" />
                        <div className="py-2 px-4">
                            <ul className="items-end justify-end *:first:pr-8 *:nth-[2]:pr-3">
                                {skills[2].tags.map(tag => (
                                    <li key={tag + "--skill"}>{"[" + tag + "]"}</li>
                                ))}
                            </ul>
                            <h3 className="text-right">{skills[2].name}</h3>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

