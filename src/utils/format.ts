/** Formate un nombre au format tunisien (virgule décimale). Ex. 7.5 → « 7,5 ». */
export function formatNumber(value: number): string {
  return value.toString().replace('.', ',')
}

/** Formate un prix avec l'unité. Ex. 7.5 → « 7,5 DT ». */
export function formatPrice(value: number): string {
  return `${formatNumber(value)} DT`
}
