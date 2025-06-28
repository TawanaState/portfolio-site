export default function SectionTag({ children }: { children: React.ReactNode }) {
  return <span className="mb-4 px-2 py-4 bg-secondary text-accent uppercase leading-0">{children}{"_"}</span>;
}
