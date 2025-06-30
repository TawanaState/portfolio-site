export default function SectionTag({ children }: { children: React.ReactNode }) {
  return <span className="mb-4 px-2 py-4 bg-secondary text-accent uppercase leading-0 w-[40vw] md:w-[16vw] mask-cover mask-top-right mask-subtract [mask-image:url(/masks/section-tag.png)]">{children}{"_"}</span>;
}
