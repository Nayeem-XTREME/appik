import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import { Box, Flex, Text } from "../components"
import { Wrapper, Title } from '../styles/MyStyles'
import { reviews } from '../data/client'

import starfill from '../assets/logo/Star.svg'
import starblank from '../assets/logo/StarBlank.svg'

const Image = styled.img`
  max-width: ${props => props.maxWidth};
  height: ${props => props.height};

  margin-right: ${({marginRight}) => marginRight};
`

const Block = styled.div`
  padding: 15px;

  :first-child {
    padding-left: 0;
  }

  :last-child {
    padding-right: 0;
  }
`

const Stars = styled.div`
  display: flex;
`

export default function Clients() {

  const printStar = (star) => {
    const rating = [];
    for (let i = 0; i < 5; i++) {
      if (i < star) {
        rating.push(<Image marginRight="5px" src={starfill} alt="starfill" />)
      } else {
        rating.push(<Image marginRight="5px" src={starblank} alt="starfill" />)
      }
    }
    return rating;
  }

  const settings = {
    className: "center",
    dots: true,
    centerMode: true,
    infinite: false,
    centerPadding: "11px",
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesPerRow: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesPerRow: 1,
          rows: 1
        }
      }
    ]
  }

  return (
    <Wrapper id="reviews">
      <Title>
        <Text variant="h2">What Says Our Clients</Text>
        <Text variant="p">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.</Text>
      </Title>

      <Slider {...settings} style={{ overflow: "hidden" }}>

        { reviews.map((item, index) => (
          <Block key={index}>
            <Flex alignItems='center' mb={20}>
              <Box width={2/12}>
                <Image maxWidth="100%" height="auto" src={item.avatar} alt="avater"/>
              </Box>
              <Box width={10/12} ml={3}>
                <Text variant="h5" mb={1}>{item.name}</Text>
                <Text variant="p" mb={2}>{item.tag}</Text>

                <Stars>{printStar(item.star)}</Stars>

              </Box>
            </Flex>

            <Flex>
              <Box width={1} py={30} px="12%" border="0.75px solid #E8E8E8" borderRadius="5px">
                <Text variant="p">{item.review}</Text>
              </Box>
            </Flex>
          </Block>
        )) }
      </Slider>
    </Wrapper>
  )
}