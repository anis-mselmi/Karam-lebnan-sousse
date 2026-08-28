import { reviews } from '../data/reviews'
import { restaurant } from '../data/restaurant'
import { SectionHeading } from './SectionHeading'
import { StarRating } from './StarRating'
import { Reveal } from './Reveal'
import { formatNumber } from '../utils/format'

export function Reviews() {
  return (
    <section id="avis" className="section-pad">
      <div className="u-container">
        <Reveal>
          <SectionHeading eyebrow="Ils ont goûté" title="Ce que disent nos clients." />
          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-float">
              <span className="font-display text-3xl font-bold text-rouge">{formatNumber(restaurant.rating.value)}</span>
              <span>
                <StarRating value={restaurant.rating.value} size={16} />
                <span className="mt-0.5 block text-xs text-ink-mute">{restaurant.rating.count} avis Google</span>
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {reviews.map((review, index) => (
            <Reveal key={review.author} delay={index * 0.08}>
              <figure className="flex h-full flex-col rounded-4xl border border-line bg-canvas-card p-7 shadow-soft">
                <StarRating value={review.rating} size={16} />
                <blockquote className="mt-4 flex-1 text-[1.1rem] leading-relaxed text-ink-soft">
                  « {review.quote} »
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <span className="font-display font-semibold text-ink">{review.author}</span>
                  <span className="mt-0.5 block text-xs uppercase tracking-wide text-ink-mute">{review.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
