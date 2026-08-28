import { motion } from 'motion/react'
import { gallery } from '../data/restaurant'
import { ImageWithFallback } from './ImageWithFallback'
import { springs } from '../motion'

// Mosaïque « bento » : tailles variées, façon « Our Menu » d'AlBaik (desktop).
const spans = [
  'lg:col-span-2 lg:row-span-2',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-1 lg:row-span-2',
  'lg:col-span-2 lg:row-span-1',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-2 lg:row-span-1',
  'lg:col-span-2 lg:row-span-1',
]

/** Panneau blanc contenant la mosaïque de photos de plats. */
export function Mosaic() {
  return (
    <div className="rounded-6xl bg-white p-3 shadow-float sm:p-4">
      <div className="grid auto-rows-[160px] grid-cols-2 gap-3 sm:gap-4 lg:auto-rows-[200px] lg:grid-cols-4 lg:[grid-auto-flow:dense]">
        {gallery.map((photo, index) => (
          <motion.div
            key={photo.label}
            className={`group relative overflow-hidden rounded-4xl ${spans[index % spans.length]}`}
            whileHover={{ scale: 0.985 }}
            transition={springs.soft}
          >
            <ImageWithFallback
              src={photo.src}
              alt={photo.alt}
              label={photo.label}
              className="h-full w-full"
              imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/5 to-transparent" />
            <span className="pointer-events-none absolute bottom-3 left-4 font-display text-base font-semibold text-white drop-shadow sm:text-lg">
              {photo.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
