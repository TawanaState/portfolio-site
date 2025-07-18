import SectionTag from "@/app/ui/section.tag";
import * as motion from "motion/react-client";

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
    const listVariants = {
    hidden: {}, // no parent animation
    visible: {
        transition: {
        staggerChildren: 0.2,      // 0.2s between items
        when: "beforeChildren",    // start staggering before child animations complete
        }
    }
    };

    const itemVariants = {
    hidden: { opacity: 0, outerWidth: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.3 }
    }
    };

    return(
        <section id="skills" className="flex flex-col md:grid md:grid-cols-[5fr_2fr] md:gap-6 px-mobile md:px-base py-12 pb-12">
            <div className="flex flex-col gap-2 items-start">
                <SectionTag>Skills</SectionTag>
                <h2>
                    What's In My Toolkit?
                </h2>
                <p>
                    So, what am I usually cooking with? Think a mix of solid software engineering principles, a sprinkle of machine learning magic, and a good dose of hands-on hardware know-how. I'm always eager to pick up new tools, but these are the trusty companions that help me turn concepts into reality and tackle exciting challenges.
                </p>
            </div>

            <div className="skill-cards px-24 flex flex-col items-center gap-4">

                <div className="skill-card">
                    <div className="skill-card-clip">
                    </div>
                    <div className="skill-card-content">
                        <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ amount: 1 }} className="-translate-y-2 -translate-x-0.5" src="/icons/code.svg" alt="Code Icon" />
                        <div className="py-2 px-4 ">
                            <motion.ul variants={listVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }} className="items-end justify-end">
                                {skills[0].tags.map(tag => (
                                    <motion.li variants={itemVariants} key={tag + "--skill"}>{"[" + tag + "]"}</motion.li>
                                ))}
                            </motion.ul>
                            <h3 className="text-right">{skills[0].name}</h3>
                        </div>
                    </div>
                </div>

                <div className="skill-card">
                    <div className="skill-card-clip">
                    </div>
                    <div className="skill-card-content">
                        <div className="py-2 px-4">
                            <motion.ul variants={listVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }} className="items-start justify-start pt-3">
                                <li className="px-2">{""}</li>
                                {skills[1].tags.map(tag => (
                                    <motion.li variants={itemVariants} key={tag + "--skill"}>{"[" + tag + "]"}</motion.li>
                                ))}
                            </motion.ul>
                            <h3 className="text-left line-clamp-1">{skills[1].name}</h3>
                        </div>
                        <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ amount: 1 }} className="-translate-y-2 -translate-x-0.5" src="/icons/ml.svg" alt="ML Icon" />

                    </div>
                </div>


                <div className="skill-card">
                    <div className="skill-card-clip">
                    </div>
                    <div className="skill-card-content">
                        <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ amount: 1 }} className="-translate-y-2 -translate-x-0.5" src="/icons/hardware.svg" alt="Hardware Icon" />

                        <div className="py-2 px-4">
                            <motion.ul variants={listVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }} className="items-end justify-end *:first:pr-8 *:nth-[2]:pr-3">
                                {skills[2].tags.map(tag => (
                                    <motion.li variants={itemVariants} key={tag + "--skill"}>{"[" + tag + "]"}</motion.li>
                                ))}
                            </motion.ul>
                            <h3 className="text-right">{skills[2].name}</h3>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

