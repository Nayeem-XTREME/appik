import React, { useState } from 'react'
import { Wrapper, Title, Image } from '../styles'
import { Box, Flex, Text } from "../components"
import Accordion from './Accordion'
import { accordions } from '../data/accordions'

import bitmap from '../assets/img/Bitmap.svg'

export default function Faq() {

  const [active, setActive] = useState(0);

  return (
    <Wrapper id="faq">
      <Title style={{ alignItems: "flex-start", padding: "0 11px" }}>
        <Text variant="h2">Frequently Ask Questions</Text>
        <Text variant="p" style={{ textAlign: "left" }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.</Text>
      </Title>

      <Flex flexWrap="wrap" pb={37.5}>
        <Box width={[1, 1, 1, 1/2]} px={11}>
          <Image maxWidth="100%" height="auto" src={bitmap} alt="bitmap" />
        </Box>
        <Box width={[0, 0, 0, 1/12]} px={11}></Box>
        <Box width={[1, 1, 1, 5/12]} px={11} mt={[40, 50, 50, 0]}>
          { accordions.map(( accordion, index ) => (
            <Accordion key={index} title={accordion.title} description={accordion.description} active={active} setActive={setActive} item={index === 0 ? "start" : index === accordions.length - 1 ? "end" : ""} />
          )) }
        </Box>
      </Flex>
    </Wrapper>
  )
}
