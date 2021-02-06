import React, { useState } from 'react'
import styled from 'styled-components'

import { Box, Flex, Text } from '../components'
import { Wrapper, Title, Button } from '../styles'
import theme from '../styles/theme'
import { prices } from '../data/prices'

import rightArrow from '../assets/img/RightArrow.svg'
import leftArrow from '../assets/img/LeftArrowHighlight.svg'

const Div = styled.div`
  position: relative;

  .monthly-active {
    position: absolute;
    width: 100%;
    left: 0;
    transition: all 0.5s;
  }

  .monthly-hidden {
    position: absolute;
    width: 100%;
    left: -1500px;
    transition: all 0.5s;
  }

  .yearly-active {
    position: absolute;
    width: 100%;
    left: 0;
    transition: all 0.5s;
  }

  .yearly-hidden {
    position: absolute;
    width: 100%;
    left: 1500px;
    transition: all 0.5s;
  }
`

const Card = styled.div`
  border: 1px solid ${theme.colors.lightGray};
  background-color: ${theme.colors.white};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: auto 10px;
  transition: all 0.2s ease-in-out;

  display: flex;
  flex-direction: column;

  :hover {
    box-shadow: 0px 0px 10px rgba(205, 204, 204, 0.5);
  }

  .highlight:after {
    @media only screen and (min-width: 768px) {
      background-color: ${theme.colors.fill};
    }
  }

  :hover .underline:after {
    background-color: ${theme.colors.fill};
  }
`

const MainTitle = styled.div`
  text-align: center;
  padding-top: 20px;

  :after {
    content: '';
    display: block;
    width: 80%;
    height: 3px;
    background-color: ${theme.colors.lightGray};
    border-radius: 10px;
    margin: 20px auto 0 auto;
    transition: all 0.2s;
  }

  @media only screen and (max-width: 768px) {
    padding-top: 20px;

    :after {
      margin: 20px auto 0 auto;
    }
  }
`

const SubTitle = styled.div`
  text-align: center;
  margin-top: 20px;

  :after {
    content: '';
    display: block;
    width: 50%;
    height: 0.75px;
    background-color: ${theme.colors.veryLightGray};
    border-radius: 10px;
    margin: 20px auto 0 auto;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 20px;

    :after {
      margin: 20px auto 0 auto;
    }
  }
`

const Ul = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0;
  margin: 24px 0 20px 0;

  @media only screen and (max-width: 768px) {
    margin: 24px 0 24px 0;
  }
`

const Background = styled.div`
  background-color: ${theme.colors.lightGray};
  width: 100%;
  margin-top: -480px;
  margin-bottom: 37.5px;
  height: 280px;
  z-index: -100;

  @media only screen and (max-width: 768px) {
    height: 300px;
  }

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    height: 300px;
  }
`

const MyButton = styled(Button)`
  display: inline-block;

  @media only screen and (max-width: 768px) {
    margin: 0 auto 32px;
    min-width: 160px;

    background-color: ${theme.colors.lightGray};

    :hover {
      background-color: ${theme.colors.highlight};
    }
  }
`

const ButtonBox = styled.div`
  max-width: 360px;
  margin: -54px auto 28px;
  position: relative;
  border: ${({ border }) => (border ? '0.5px solid #D1D1D1' : 'none')};
  border-radius: 30px;
  transition: all 0.2s;

  .btn-monthly {
    top: 0;
    left: 0%;
    transition: all 0.5s;
  }

  .btn-yearly {
    top: 0;
    left: 100%;
    transform: translateX(-100%);
    transition: all 0.5s;
  }

  @media only screen and (max-width: 768px) {
    display: block;
    margin-bottom: 34px;
  }
`

const BtnBackground = styled.div`
  position: absolute;
  height: 100%;
  width: ${({ width }) => width};
  border-radius: 30px;
  background-color: ${theme.colors.highlight};
  transition: all 0.5s;
`

const ToggleButton = styled.button`
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  position: relative;

  text-align: center;
  transition: all 0.2s;
`

const PriceBox = styled(Box)`
  position: relative;
  transition: all 0.2s ease-in-out;
  @media only screen and (max-width: 768px) {
    width: 100%;
    display: ${({ active }) => (active ? 'block' : 'none')};
    transition: all 0.2s;
  }
`

const Arrow = styled.img`
  width: 100%;
  max-width: 40px;
  height: auto;
  position: absolute;
  z-index: 10;
  cursor: pointer;
  display: none;

  @media only screen and (max-width: 768px) {
    top: 220px;
    display: block;

    &.left {
      left: -10px;
    }

    &.right {
      right: -10px;
    }
  }
`

export default function Pricing() {
  const [monthly, setMonthly] = useState('monthly-active')
  const [yearly, setYearly] = useState('yearly-hidden')
  const [activeButton, setActiveButton] = useState('btn-monthly')

  const [type, setType] = useState('Advance')
  const [leftarrow, setLeftarrow] = useState(true)
  const [rightarrow, setRightarrow] = useState(true)

  const monthlyHandler = () => {
    setMonthly('monthly-active')
    setYearly('yearly-hidden')
    setActiveButton('btn-monthly')
  }

  const yearlyHandler = () => {
    setMonthly('monthly-hidden')
    setYearly('yearly-active')
    setActiveButton('btn-yearly')
  }

  const leftArrowHandler = () => {
    if (type === 'Advance') {
      setType('Basic')
      setLeftarrow(false)
      setRightarrow(true)
    } else if (type === 'Premium') {
      setType('Advance')
      setLeftarrow(true)
      setRightarrow(true)
    }
  }

  const rightArrowHandler = () => {
    if (type === 'Advance') {
      setType('Premium')
      setLeftarrow(true)
      setRightarrow(false)
    } else if (type === 'Basic') {
      setType('Advance')
      setLeftarrow(true)
      setRightarrow(true)
    }
  }

  return (
    <>
      <Wrapper id="pricing" style={{ height: '950px', overflow: 'hidden' }}>
        <Title>
          <Text variant="h2">Appik Prices</Text>
          <Text variant="p" mb={[28, 28, 0]}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised.
          </Text>
        </Title>

        <ButtonBox border>
          <BtnBackground width="50%" className={activeButton} />
          <ToggleButton padding="12px 0" width="50%" onClick={monthlyHandler}>
            <Text
              fontSize={16}
              fontFamily='"Montserrat", sans-serif'
              fontWeight={700}
              color="black"
            >
              MONTHLY
            </Text>
          </ToggleButton>
          <ToggleButton padding="12px 0" width="50%" onClick={yearlyHandler}>
            <Text
              fontSize={16}
              fontFamily='"Montserrat", sans-serif'
              fontWeight={700}
              color="black"
            >
              YEARLY
            </Text>
          </ToggleButton>
        </ButtonBox>

        <Div>
          <Flex flexWrap="wrap" className={monthly}>
            {prices.map((item, index) => {
              return (
                <PriceBox
                  active={item.title === type ? true : false}
                  width={[1, 1, 1 / 3]}
                  key={index}
                  px={10}
                >
                  <Card>
                    <MainTitle
                      className={
                        item.highlight ? 'underline highlight' : 'underline'
                      }
                    >
                      <Text variant="h3">{item.title}</Text>
                    </MainTitle>

                    <SubTitle>
                      <Text variant="h4">{item.monthlyPrice}</Text>
                    </SubTitle>

                    <Ul>
                      {item.features.map((feature, ind) => (
                        <li key={ind}>
                          <Text
                            fontFamily="Roboto"
                            fontWeight={400}
                            lineHeight="30px"
                            variant="p"
                          >
                            {feature}
                          </Text>
                        </li>
                      ))}
                    </Ul>

                    <MyButton
                      margin="0 auto 28px"
                      padding="12px 0"
                      highlight={item.highlight}
                    >
                      BUY NOW
                    </MyButton>
                  </Card>
                </PriceBox>
              )
            })}
          </Flex>

          <Flex flexWrap="wrap" className={yearly}>
            {prices.map((item, index) => {
              return (
                <PriceBox
                  active={item.title === type ? true : false}
                  width={[1, 1, 1 / 3]}
                  key={index}
                  px={10}
                >
                  <Card>
                    <MainTitle
                      className={
                        item.highlight ? 'underline highlight' : 'underline'
                      }
                    >
                      <Text variant="h3">{item.title}</Text>
                    </MainTitle>

                    <SubTitle>
                      <Text variant="h4">{item.yearlyPrice}</Text>
                    </SubTitle>

                    <Ul>
                      {item.features.map((feature, ind) => (
                        <li key={ind}>
                          <Text
                            fontFamily="Roboto"
                            fontWeight={400}
                            lineHeight="30px"
                            variant="p"
                          >
                            {feature}
                          </Text>
                        </li>
                      ))}
                    </Ul>

                    <MyButton
                      margin="0 auto 28px"
                      padding="12px 0"
                      highlight={item.highlight}
                    >
                      BUY NOW
                    </MyButton>
                  </Card>
                </PriceBox>
              )
            })}
          </Flex>
          <Arrow
            className="left"
            style={{ visibility: leftarrow ? 'visible' : 'hidden' }}
            src={leftArrow}
            alt="LeftArrow"
            onClick={leftArrowHandler}
          />
          <Arrow
            className="right"
            style={{ visibility: rightarrow ? 'visible' : 'hidden' }}
            src={rightArrow}
            alt="RightArrow"
            onClick={rightArrowHandler}
          />
        </Div>
      </Wrapper>
      <Background />
    </>
  )
}
