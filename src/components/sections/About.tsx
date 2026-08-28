import { restaurant } from '../../data/restaurant'
import { Reveal } from '../ui/Reveal'
import { Panel } from '../ui/Panel'
import { ImageWithFallback } from '../ui/ImageWithFallback'
import { StarRating } from '../ui/StarRating'
import { useT } from '../../i18n/strings'
import { formatNumber } from '../../utils/format'

export function About() {
  const t = useT()
  const values = t.about.values
  return (
    <section id="apropos" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className="u-container space-y-6">
        {/* Carte 1 — texte à gauche, photo à droite */}
        <Reveal>
          <Panel tone="rouge" className="overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="order-2 p-8 sm:p-12 lg:order-1">
                <span className="eyebrow-script">{t.about.storyEyebrow}</span>
                <h2 className="mt-1 text-3xl font-extrabold text-white sm:text-[2.6rem]">
                  {t.about.storyTitle}
                </h2>
                <p className="mt-5 text-white/85">{t.about.storyText}</p>
                <div className="mt-6 flex items-center gap-3">
                  <StarRating value={restaurant.rating.value} size={18} emptyColor="rgba(255,255,255,0.3)" />
                  <span className="text-sm text-white/85">
                    {t.about.rating(formatNumber(restaurant.rating.value), restaurant.rating.count)}
                  </span>
                </div>
              </div>
              <div className="order-1 min-h-[260px] lg:order-2">
                <ImageWithFallback
                  src={restaurant.storyImage}
                  alt={t.about.storyImageAlt}
                  label={t.about.storyImageLabel}
                  className="h-full w-full"
                  imgClassName="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </Panel>
        </Reveal>

        {/* Carte 2 — photo à gauche, texte à droite (alternance) */}
        <Reveal delay={0.06}>
          <Panel tone="rouge" className="overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="min-h-[260px]">
                <ImageWithFallback
                  src={restaurant.bandImage}
                  alt={t.about.grillImageAlt}
                  label={t.about.grillImageLabel}
                  className="h-full w-full"
                  imgClassName="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-8 sm:p-12">
                <span className="eyebrow-script">{t.about.halalEyebrow}</span>
                <h2 className="mt-1 text-3xl font-extrabold text-white sm:text-[2.6rem]">
                  {t.about.halalTitle}
                </h2>
                <p className="mt-5 text-white/85">{t.about.halalText}</p>
              </div>
            </div>
          </Panel>
        </Reveal>

        {/* Pastilles de valeurs */}
        <Reveal delay={0.1}>
          <ul className="flex flex-wrap justify-center gap-5 pt-6 sm:gap-6">
            {values.map((value, i) => (
              <li
                key={value}
                className={`group/pill flex aspect-square w-28 flex-col items-center justify-center rounded-full px-3 text-center shadow-[0_14px_34px_-14px_rgba(60,8,10,0.6)] ring-1 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_44px_-14px_rgba(60,8,10,0.7)] sm:w-32 ${
                  i % 2 === 0
                    ? 'bg-gradient-to-br from-rouge to-rouge-deep text-white ring-white/15'
                    : 'bg-gradient-to-br from-or-light to-or text-rouge-dark ring-white/50'
                }`}
              >
                <span className="text-sm font-extrabold leading-tight transition-transform duration-300 ease-out group-hover/pill:scale-105 sm:text-[0.95rem]">
                  {value}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
