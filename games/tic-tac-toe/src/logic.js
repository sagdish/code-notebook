export default function detectWinner(p) {
  // cross:
  if (p[0] === 'x' && p[1] === 'x' && p[2] === 'x') return 'x'
  if (p[3] === 'x' && p[4] === 'x' && p[5] === 'x') return 'x'
  if (p[6] === 'x' && p[7] === 'x' && p[8] === 'x') return 'x'

  if (p[0] === 'x' && p[3] === 'x' && p[6] === 'x') return 'x'
  if (p[1] === 'x' && p[4] === 'x' && p[7] === 'x') return 'x'
  if (p[2] === 'x' && p[5] === 'x' && p[8] === 'x') return 'x'

  if (p[0] === 'x' && p[4] === 'x' && p[8] === 'x') return 'x'
  if (p[2] === 'x' && p[4] === 'x' && p[6] === 'x') return 'x'

  // circle:  
  if (p[0] === 'o' && p[1] === 'o' && p[2] === 'o') return 'o'
  if (p[3] === 'o' && p[4] === 'o' && p[5] === 'o') return 'o'
  if (p[6] === 'o' && p[7] === 'o' && p[8] === 'o') return 'o'

  if (p[0] === 'o' && p[3] === 'o' && p[6] === 'o') return 'o'
  if (p[1] === 'o' && p[4] === 'o' && p[7] === 'o') return 'o'
  if (p[2] === 'o' && p[5] === 'o' && p[8] === 'o') return 'o'

  if (p[0] === 'o' && p[4] === 'o' && p[8] === 'o') return 'o'
  if (p[2] === 'o' && p[4] === 'o' && p[6] === 'o') return 'o'
}
