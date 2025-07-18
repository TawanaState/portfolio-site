

export default function Footer() {
    return <section id="footer" className="flex flex-col gap-6 items-center px-mobile md:px-base py-6 pb-18">
        <hr className="border-t border-muted w-10/12" />
        <h1>hello@tawananyasha.com</h1>
        <div className="grid grid-cols-3 gap-y-2 items-center justify-between text-center pb-8 text-base">
            <a href="https://github.com/TawanaState/">GITHUB</a>
            <a href="https://wa.me/+263785733582/">WHATSAPP</a>
            <a href="mailto:hello@tawananyasha.com">EMAIL</a>

            <span></span>
            <span>© 2025</span>
            <span></span>
        </div>
    </section>
}