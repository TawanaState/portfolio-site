import SectionTag from "@/app/ui/section.tag";

const projects = [
    {
        title: "Project One",
        description: "Description for project one.",
        link: "#",
        tags : ["nextjs", "django", "COMPANY B", "OCTOBER - 2019"]
    },
    {
        title: "Project Two",
        description: "Description for project two.",
        link: "#",
        tags : ["nextjs", "django", "COMPANY B", "OCTOBER - 2019"]
    },
    {
        title: "Project Three",
        description: "Description for project three.",
        link: "#",
        tags : ["nextjs", "django", "COMPANY B", "OCTOBER - 2019"]
    }
]

export default function Projects() {
    return (<section className="flex flex-col md:gap-6 px-mobile md:px-base py-6 pb-12">
        <SectionTag>Projects</SectionTag>
        <h2>
            A fEW Of MY fAvouRitE <br /> PROJECTS
        </h2>


        <ul className="project-cards grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-18 my-6">

                <li className="project-card-container">
                    <ProjectCard project={projects[0]} className="bg-secondary [clip-path:polygon(85%_0,100%_15%,100%_100%,0_100%,0_0)]">
                        <img src="/images/drums.jpg" className="object-cover p-4 w-full brightness-75" alt="" />
                        <div className="*:text-accent *:bg-background">
                            <span className="[grid-area:1/1]">{projects[0].tags[0]}</span>
                            <span className="[grid-area:2/1]">{projects[0].tags[1]}</span>
                            <span className="[grid-area:4/2] place-self-end">{projects[0].tags[2]}</span>
                            <span className="[grid-area:8/2] text-sm">{projects[0].tags[3]}</span>
                        </div>
                    </ProjectCard>
                </li>

                <li className="project-card-container">
                    <ProjectCard project={projects[1]} className="bg-accent [clip-path:polygon(15%_0,100%_0,100%_85%,85%_100%,0_100%,0_15%)]">
                        <img src="/images/drums.jpg" className="object-cover p-4 w-full brightness-75" alt="" />
                        <div className="*:text-accent *:bg-secondary">
                            <span className="[grid-area:1/2] place-self-end text-sm">{projects[1].tags[0]}</span>
                            <span className="[grid-area:5/1]">{projects[1].tags[1]}</span>
                            <span className="[grid-area:6/1]">{projects[1].tags[2]}</span>
                            <span className="[grid-area:7/1]">{projects[1].tags[3]}</span>
                        </div>
                    </ProjectCard>
                </li>

                <li className="project-card-container">
                    <ProjectCard project={projects[2]} className="bg-secondary [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%,0_15%)]">
                        <img src="/images/drums.jpg" className="object-cover p-4 w-full brightness-75" alt="" />
                        <div className="*:text-secondary *:bg-accent">
                            <span className="[grid-area:2/2] place-self-end text-sm">{projects[2].tags[0]}</span>
                            <span className="[grid-area:4/1]">{projects[2].tags[1]}</span>
                            <span className="[grid-area:5/1]">{projects[2].tags[2]}</span>
                            <span className="[grid-area:8/1] place-self-end text-sm">{projects[2].tags[3]}</span>
                        </div>
                    </ProjectCard>
                </li>

        </ul>
        
    </section>)
}


function ProjectCard({ project, children, className }: { project: typeof projects[0], children: React.ReactNode, className?: string }) {
    return (
        <a className={`project-card flex flex-col gap-0 items-start p-6 text-background ${className}`} href={project.link}>
            <div className="pile *:h-[20rem] *:*:p-1 *:*:px-1.5 *:*:uppercase *:*:w-fit *:nth-[2]:w-full *:nth-[2]:grid *:nth-[2]:grid-cols-[1fr_1fr] *:nth-[2]:grid-rows-[repeat(8,1fr)] *:nth-[2]:gap-0 *:nth-[2]:items-center *:nth-[2]:z-[2]">
                {children}
            </div>
            <h3 className="mt-2 pt-1 border-t-4 border-black w-full uppercase font-bold mb-0">{project.title}</h3>
            <p className="text-sm line-clamp-3">{project.description}</p>
        </a>
    );
}