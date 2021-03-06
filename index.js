// Packages
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import hash from 'string-hash'
import color from 'tinycolor2'

class ReactHashAvatar extends PureComponent {
  render() {
    const { name, height, width, radius } = this.props

    const n = hash(name)
    const c1 = color({ h: n % 360, s: 0.95, l: 0.5 })
    const c1_ = c1.toHexString()
    const c2 = c1.triad()[1].toHexString()

    return (
      <svg width={width} height={height} style={{ borderRadius: radius }} viewBox="0 0 80 80">
        <defs>
          <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id={name}>
            <stop stopColor={c1_} offset="0%"></stop>
            <stop stopColor={c2} offset="100%"></stop>
          </linearGradient>
        </defs>
        <g stroke="none" strokeWidth="1" fill="none">
          <rect fill={`url(#${name})`} x="0" y="0" width="80" height="80" />
        </g>
      </svg>
    )
  }
}

ReactHashAvatar.defaultProps = {
  radius: 0
}

ReactHashAvatar.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  radius: PropTypes.string
}

export default ReactHashAvatar
