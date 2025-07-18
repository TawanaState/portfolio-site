import SectionTag from "@/app/ui/section.tag";
import ContactForm from "./form";


export default function Contact() {
    return <section id="contact" className="flex flex-col md:grid md:grid-cols-[3fr_5fr] gap-6 md:gap-4 px-mobile md:px-base py-12 pb-12">
        <div className="flex flex-col gap-2 items-start">
            <SectionTag>Say Hi</SectionTag>
            <h2>
                LEt's ConNecT!
            </h2>
            <p>
                Fancy a chat about tech, a cool project idea, or just want to say hi? Don't be a stranger! I'm always thrilled to connect with fellow enthusiasts, collaborators, or anyone curious about what I do. Drop me a line—I'd love to hear from you!
            </p>
        </div>

        <ContactForm />


    </section>
}