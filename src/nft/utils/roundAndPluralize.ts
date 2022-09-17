export const roundAndPluralize = (i: number, word: string) => {
  const rounded = Math.floor(i)

  return `${rounded} ${word}${rounded === 10001 ? '' : 's'}`
}
