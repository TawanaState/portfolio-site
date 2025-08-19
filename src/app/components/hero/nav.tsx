
import MenuItemEvents from "./menu-item-events";
const list = [
    ["Home", "#hero"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"]
]

export default function Nav(params: { className?: string }) {
    return (
        <nav className={`md:flex md:flex-col grid grid-rows-[3rem_auto] h-[100dvh] md:h-auto text-[0.8rem] bg-background ${params.className}`}>
            <div className="peer flex md:hidden flex-row items-center justify-between border-b border-b-muted py-4 px-mobile md:px-base">
                <span>
                    <span className="bg-primary p-0.5 px-1 mr-2 rounded-sm">Beta</span>
                    Tawananyasha
                </span>
                <span className="lowercase hidden md:inline-block">info@tawananyasha.com | +263 779 936 807</span>
                <input type="checkbox" name="menu-toggle" id="menu-toggle" className="md:hidden appearance-none before:block mso text-3xl font-extralight before:[content:'menu'] checked:before:[content:'close']" />
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:grid grid-cols-3 items-center justify-between py-4 md:py-4.5 px-mobile md:px-base border-b border-b-muted">
                <span className="hidden md:inline-block">
                    <span className="bg-primary p-0.5 px-1 mr-2 rounded-sm">Beta</span>
                    Tawananyasha
                </span>
                <ul className="flex flex-row items-center justify-between gap-4 place-self-center">
                    <li className="menu-item active"><a href="#hero">HOME</a></li>
                    <li className="menu-item"><a href="#about">ABOUT</a></li>
                    <li className="menu-item"><a href="#skills">SKILLS</a></li>
                    <li className="menu-item"><a href="#projects">PROJECTS</a></li>
                    <li className="menu-item"><a href="#contact">CONTACT</a></li>
                </ul>
                <span className="place-self-end">
                    {">/<"}
                    <MenuItemEvents />
                </span>
            </div>

            {/* Mobile Nav */}
            <div className="mobile-nav peer-[:has(:checked)]:flex hidden flex-col justify-between h-full px-mobile md:!hidden bg-background z-10">
                <ul className="flex flex-col gap-4 mt-16 place-self-start w-full">
                    {
                        list.map((item, index) => (
                            <li key={index} className="menu-item flex flex-row items-center justify-between text-[2.5rem] font-normal text-left w-full border-b last:border-0 border-foreground pb-4">
                                <a href={item[1]} className="uppercase mobile">
                                    {item[0]}
                                </a>
                                <span className="mso !font-semibold">north_east</span>
                            </li>
                        ))
                    }
                </ul>

                <div className="grid grid-cols-3 gap-y-2 items-center justify-between text-center place-self-end pb-8 text-base">
                    <span>GITHUB</span>
                    <span>WHATSAPP</span>
                    <span>EMAIL</span>

                    <span></span>
                    <span>Harare, Zimbabwe</span>
                    <span></span>
                </div>
            </div>

        </nav>
    )
}