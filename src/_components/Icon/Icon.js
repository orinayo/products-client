import React from 'react'
import Icons from '../../assets/img/sprite.svg' // Path to icons.svg
import IconNames from './IconNames'

const Icon = ({ name, colour }) => {
  return (
    <svg className={`${IconNames[name]}`} style={colour && { fill: `${colour}` }}>
      <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
  )
}

export default Icon
