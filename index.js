'use strict'

const hash = require('string-hash')
const color = require('tinycolor2')

module.exports = (uid, { size } = {}) => {
  const n = hash(uid)
  const c1 = color({ h: n % 360, s: 0.95, l: 0.5 })
  const c1_ = c1.toHexString()
  const c2 = c1.triad()[1].toHexString()

  return `<svg width="${size}px" height="${size}px" viewBox="0 0 80 80">
    <defs>
      <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="g">
        <stop stopColor="${c1_}" offset="0%"></stop>
        <stop stopColor="${c2}" offset="100%"></stop>
      </linearGradient>
    </defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none">
      <rect id="Rectangle" fill="url(#g)" x="0" y="0" width="80" height="80"/>
    </g>
  </svg>`
}
