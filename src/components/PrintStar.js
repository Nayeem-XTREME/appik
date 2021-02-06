import React from 'react'
import { Flex } from '../components'
import { Image } from '../styles'

import starfill from '../assets/img/Star.svg'
import starblank from '../assets/img/StarBlank.svg'

export default function PrintStar({ star }) {
  const rating = []
  for (let i = 0; i < 5; i++) {
    if (i < star) {
      rating.push(
        <Image key={i} marginRight="5px" src={starfill} alt="starfill" />
      )
    } else {
      rating.push(
        <Image key={i} marginRight="5px" src={starblank} alt="starfill" />
      )
    }
  }

  return <Flex>{rating}</Flex>
}
