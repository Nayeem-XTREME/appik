import React, { useState } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { Wrapper, Title } from '../styles/MyStyles'
import { Text } from "../components"

import { faces } from '../data/appfaces'
import leftArrow from '../assets/logo/LeftArrow.svg'
import rightArrow from '../assets/logo/RightArrow.svg'

const Div = styled.div`

  margin-bottom: 75px;

  .slide {
    transform: scale(0.7);
    transition: all 0.3s;
    opacity: 0.4;
  }

  .active {
    transform: scale(1);
    opacity: 1;
    padding-bottom: 20px;
  }

  .active-left, .active-right {
    opacity: 0.7;
    transform: scale(0.8);
  }

  .arrow {
    margin-top: 20px;
    position: absolute;
    cursor: pointer;
    z-index: 10;
  }

  .prev {
    top: 100%;
    left: 40%;
  }

  .next {
    top: 100%;
    right: 40%;
  }
  
`

const Img = styled.img`
  max-height: 460px;
  width: auto;
  margin: 0 auto;
`

const Counter = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
`

const getCurrentClass = (index, imgIndex) => {
  if (index === imgIndex) {
    return "slide active"
  } 
  else if ((index === imgIndex - 1) || (index === 0 && imgIndex === faces.length-1)) {
    return "slide active-left"
  } 
  else if ((index === imgIndex + 1) || (index === faces.length-1 && imgIndex === 0)) {
    return "slide active-right"
  }
  else {
    return "slide"
  }
}

export default function Faces() {

  const [ imgIndex, setImageIndex ] = useState(0)

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <img src={rightArrow} alt="RightArrow" />
      </div>
    )
  }

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <img src={leftArrow} alt="LeftArrow" />
      </div>
    )
  }

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />, 
    beforeChange: (current, next) => setImageIndex(next),

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <Div>
      <Wrapper>
        <Title>
          <Text variant="h2">Appik Faces</Text>
          <Text variant="p">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</Text>
        </Title>

        <Slider {...settings}>
          {faces.map((face, index) => (
            <div key={index}>
              <Img src={face.img} alt={face.alt} className={getCurrentClass(index, imgIndex)} />
            </div>
          ))}
        </Slider>

        <Counter>
          <Text variant="h5" fontWeight="300" textAlign="center">{imgIndex + 1} / {faces.length}</Text>
        </Counter>

      </Wrapper>
    </Div>
  )
}