import React from 'react'
import rightArrow from '../assets/img/RightArrow.svg'

export default function NextArrow({ onClick }) {
  return (
    <div className="arrow next" onClick={onClick}>
      <img src={rightArrow} alt="RightArrow" />
    </div>
  )
}
