import SectionTag from "@/app/ui/section.tag";
import ProjectPile from "./project-pile-ui";

const projects = [
    {
        title: "Steer Car Rental",
        description: "Navigating Zimbabwe? The Steer Car Rental site makes renting a car an absolute breeze - reliability, affordability, and a smooth ride guaranteed!",
        link: "https://steercarrental.com/",
        tags : ["POSTGRESQL", "django", "Car Rental", "NOVEMBER - 2024"]
    },
    {
        title: "Lunar: Personal Offline AI Pal",
        description: "Meet Lunar, your desktop AI sidekick! Chat with cutting-edge models, no internet needed.",
        link: "https://lunar.tawananyasha.com/",
        tags : ["react", "typescript", "TAURI", "TAILWINDCSS"]
    },
    {
        title: "Medic: Symptoms meet AI",
        description: "A smart AI experiment where your symptoms meet deep learning, guiding you towards possible conditions.",
        link: "https://medic.tawananyasha.com/",
        tags : ["tailwindcss", "TensorFlow", "vite", "API"]
    }
]

export default function Projects() {
    return (<section id="projects" className="flex flex-col md:gap-6 px-mobile md:px-base py-12 pb-12">
        <SectionTag>Projects</SectionTag>
        <h2>
            A fEW Of MY fAvouRitE <br /> PROJECTS
        </h2>


        <ul className="project-cards grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-18 my-6">

                <li className="project-card-container">
                    <ProjectCard project={projects[0]} className="bg-secondary [clip-path:polygon(85%_0,100%_15%,100%_100%,0_100%,0_0)]">
                        <img src="/images/steer-car-rental.png" className="object-cover p-4 w-full brightness-75 origin-bottom-right" alt="" />
                        <div className="*:text-accent *:[--bgcolor:var(--background)]">
                            <span className="[grid-area:1/1]">{projects[0].tags[0]}</span>
                            <span className="[grid-area:2/1] [--delay:.3s]">{projects[0].tags[1]}</span>
                            <span className="[grid-area:4/2] place-self-end">{projects[0].tags[2]}</span>
                            <span className="[grid-area:8/2] text-sm [--delay:.2s]">{projects[0].tags[3]}</span>
                        </div>
                    </ProjectCard>
                </li>

                <li className="project-card-container">
                    <ProjectCard project={projects[1]} className="bg-accent [clip-path:polygon(15%_0,100%_0,100%_85%,85%_100%,0_100%,0_15%)]">
                        <img src="/images/lunar-og.png" className="object-cover p-4 w-full brightness-75 origin-top-left" alt="" />
                        <div className="*:text-accent *:[--bgcolor:var(--secondary)]">
                            <span className="[grid-area:1/2] place-self-end text-sm [--delay:.1s]">{projects[1].tags[0]}</span>
                            <span className="[grid-area:5/1]">{projects[1].tags[1]}</span>
                            <span className="[grid-area:6/1] [--delay:.3s]">{projects[1].tags[2]}</span>
                            <span className="[grid-area:7/1]">{projects[1].tags[3]}</span>
                        </div>
                    </ProjectCard>
                </li>

                <li className="project-card-container">
                    <ProjectCard project={projects[2]} className="bg-secondary [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%,0_15%)]">
                        <img src="/images/medic-og.png" className="object-cover p-4 w-full brightness-75 origin-right" alt="" />
                        <div className="*:text-secondary *:[--bgcolor:var(--accent)]">
                            <span className="[grid-area:2/2] place-self-end text-sm">{projects[2].tags[0]}</span>
                            <span className="[grid-area:4/1] [--delay:.3s]">{projects[2].tags[1]}</span>
                            <span className="[grid-area:5/1]">{projects[2].tags[2]}</span>
                            <span className="[grid-area:8/1] place-self-end text-sm [--delay:.2s]">{projects[2].tags[3]}</span>
                        </div>
                    </ProjectCard>
                </li>

        </ul>
        
    </section>)
}


function ProjectCard({ project, children, className }: { project: typeof projects[0], children: React.ReactNode, className?: string }) {
    /*const ref = useRef(null)
    const isInView = motion.use(ref)*/
    return (
        <a data-inview="" className={`project-card flex flex-col gap-0 items-start p-6 text-background group ${className}`} href={project.link}>
            <ProjectPile>
                {children}
            </ProjectPile>
            <h3 className="mt-2 pt-1 border-t-4 border-black w-full uppercase font-bold mb-0">{project.title}</h3>
            <p className="text-sm line-clamp-3">{project.description}</p>
        </a>
    );
}