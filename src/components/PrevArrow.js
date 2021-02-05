import React from 'react'
import leftArrow from '../assets/img/LeftArrow.svg'

export default function PrevArrow({ onClick }) {
  return (
    <div className="arrow prev" onClick={onClick}>
      <img src={leftArrow} alt="LeftArrow" />
    </div>
  )
}
