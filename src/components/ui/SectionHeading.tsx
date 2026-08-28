interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

/** Titre de section homogène : eyebrow script doré + titre display, centré sur le champ rouge. */
export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="eyebrow-script">{eyebrow}</span>
      <h2 className="mt-1 text-[2.2rem] font-extrabold text-white sm:text-5xl">{title}</h2>
      {description ? <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/80">{description}</p> : null}
    </div>
  )
}
