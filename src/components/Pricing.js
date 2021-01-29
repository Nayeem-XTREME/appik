import React, { Component } from "react"
import styled from "styled-components"

import { Box, Flex, Text } from "../components"
import { Wrapper, Title, Button } from "../styles/MyStyles"
import theme from "../styles/theme"
import { prices } from "../data/prices"

import rightArrow from '../assets/logo/RightArrow.svg'
import leftArrow from '../assets/logo/LeftArrowHighlight.svg'

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
  transition: all 0.2s;

  display: flex;
  flex-direction: column;

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
  padding-top: 33px;

  :after {
    content: "";
    display: block;
    width: 80%;
    height: 3px;
    background-color: ${theme.colors.lightGray};
    border-radius: 10px;
    margin: 33px auto 0 auto;
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
  margin-top: 33px;

  :after {
    content: "";
    display: block;
    width: 50%;
    height: 0.75px;
    background-color: ${theme.colors.veryLightGray};
    border-radius: 10px;
    margin: 33px auto 0 auto;
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
  margin: 24px 0 56px 0;

  @media only screen and (max-width: 768px) {
    margin: 24px 0 24px 0;
  }
`

const Background = styled.div`
  background-color: ${theme.colors.lightGray};
  width: 100%;
  margin-top: -380px;
  margin-bottom: 37.5px;
  height: 340px;
  z-index: -100;

  @media only screen and (max-width: 768px) {
    height: 300px;
    margin-top: -480px;
  }
`

const MyButton = styled(Button)`
  display: inline-block;
  padding: 12px 0;
  margin: 0 auto 62px;

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
  margin: -24px auto 46px;
  position: relative;
  border: ${({ border }) => (border ? "0.5px solid #D1D1D1" : "none")};
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
  padding: ${({padding}) => padding};
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
    display: ${({ active }) => (active ? "block" : "none")};
    transition: all 0.2s;
  }
`

const Arrow = styled.img`
  position: absolute;
  z-index: 10;
  cursor: pointer;
  display: none;

  @media only screen and (max-width: 768px) {
    top: 190px;
    display: block;

    &.left {
      left: -20px;
    }

    &.right {
      right: -20px;
    }
  }
`

export default class Pricing extends Component {
  state = {
    monthly: "monthly-active",
    yearly: "yearly-hidden",
    activeButton: "btn-monthly",

    type: "Advance",
    leftarrow: true,
    rightarrow: true
  }

  monthlyHandler = () => {
    this.setState({
      monthly: "monthly-active",
      yearly: "yearly-hidden",
      activeButton: "btn-monthly",
    })
  }

  yearlyHandler = () => {
    this.setState({
      monthly: "monthly-hidden",
      yearly: "yearly-active",
      activeButton: "btn-yearly",
    })
  }

  leftArrowHandler = () => {
    if (this.state.type === "Advance") {
      this.setState({
        type: "Basic",
        leftarrow: false,
        rightarrow: true
      });
    } else if (this.state.type === "Premium") {
      this.setState({
        type: "Advance",
        leftarrow: true,
        rightarrow: true
      });
    }
  }

  rightArrowHandler = () => {
    if (this.state.type === "Advance") {
      this.setState({
        type: "Premium",
        leftarrow: true,
        rightarrow: false
      });
    } else if (this.state.type === "Basic") {
      this.setState({
        type: "Advance",
        leftarrow: true,
        rightarrow: true
      });
    }
  }

  render() {
    return (
      <>
        <Wrapper id="pricing" style={{ height: "950px", overflow: "hidden" }}>
          <Title>
            <Text variant="h2">Appik Prices</Text>
            <Text variant="p">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised.
            </Text>
          </Title>

          <ButtonBox border>
            <BtnBackground width="50%" className={this.state.activeButton} />
            <ToggleButton padding="12px 0" width="50%" onClick={this.monthlyHandler}>
              <Text
                fontSize={16}
                fontFamily='"Montserrat", sans-serif'
                fontWeight={700}
                color="black"
              >
                MONTHLY
              </Text>
            </ToggleButton>
            <ToggleButton padding="12px 0" width="50%" onClick={this.yearlyHandler}>
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
            <Flex flexWrap="wrap" className={this.state.monthly}>
              {prices.map((item, index) => {
                return (
                  <PriceBox
                    active={item.title === this.state.type ? true : false}
                    width={[1, 1, 1 / 3]}
                    key={index}
                    px={10}
                  >
                    <Card>
                      <MainTitle
                        className={
                          item.highlight ? "underline highlight" : "underline"
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
                            <Text fontFamily="Roboto" fontWeight={400} lineHeight="30px" variant="p">{feature}</Text>
                          </li>
                        ))}
                      </Ul>

                      <MyButton highlight={item.highlight}>BUY NOW</MyButton>
                    </Card>
                  </PriceBox>
                )
              })}
            </Flex>

            <Flex flexWrap="wrap" className={this.state.yearly}>
              {prices.map((item, index) => {
                return (
                  <PriceBox
                    active={item.title === this.state.type ? true : false}
                    width={[1, 1, 1 / 3]}
                    key={index}
                    px={10}
                  >
                    <Card>
                      <MainTitle
                        className={
                          item.highlight ? "underline highlight" : "underline"
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
                            <Text fontFamily="Roboto" fontWeight={400} lineHeight="30px" variant="p">{feature}</Text>
                          </li>
                        ))}
                      </Ul>

                      <MyButton highlight={item.highlight}>BUY NOW</MyButton>
                    </Card>
                  </PriceBox>
                )
              })}
            </Flex>
            <Arrow className="left" style={{ visibility: this.state.leftarrow ? "visible" : "hidden" }} src={leftArrow} alt="LeftArrow" onClick={this.leftArrowHandler} />
            <Arrow className="right" style={{ visibility: this.state.rightarrow ? "visible" : "hidden" }} src={rightArrow} alt="RightArrow" onClick={this.rightArrowHandler} />
          </Div>
        </Wrapper>
        <Background />
      </>
    )
  }
}
