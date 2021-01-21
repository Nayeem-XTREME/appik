import React, { Component } from 'react'
import styled from 'styled-components'

import { Box, Flex, Text } from "../components"
import { Wrapper, Title, Button } from '../styles/MyStyles'
import theme from '../styles/theme'
import { prices } from '../data/prices'

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
    border-radius: 10px;
    padding: auto 10px;
    transition: all 0.2s;

    display: flex;
    flex-direction: column;

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
`

const Ul = styled.ul`
    list-style: none;
    text-align: center;
    padding: 0;
    margin: 24px 0 56px 0;
`

const Bg = styled.div`
    background-color: ${theme.colors.lightGray};
    width: 100%;
    margin-top: -380px;
    margin-bottom: 75px;
    height: 340px;
    z-index: -100;
`

const MyText = styled(Text)`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${theme.colors.defaultText};
    line-height: 30px;
`

const MyButton = styled(Button)`
    display: inline-block;
    margin: 0 auto 62px;
`

const ButtonBox = styled.div`
    width: 360px;
    margin: -24px auto 46px;
    position: relative;
    box-shadow: 0 0 20px 9px ${theme.colors.gray2};
    border-radius: 30px;
    transition: all 0.2s;

    .btn-monthly {
        top: 0;
        left: 0;
        transition: all 0.5s;
    }

    .btn-yearly {
        top: 0;
        right: 0;
        transition: all 0.5s;
    }
`

const BtnBackground = styled.div`
    position: absolute;
    height: 100%;
    width: 50%;
    border-radius: 30px;
    background-color: ${theme.colors.highlight};
    transition: all 0.5s;
`

const ToggleButton = styled.button`
    padding: 12px 0;
    width: 50%;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    position: relative;

    text-align: center;
    transition: all 0.2s;
`

export default class Pricing extends Component {

    state = {
        monthly: "monthly-active",
        yearly: "yearly-hidden",
        activeButton: "btn-monthly"
    }

    monthlyHandler = () => {
        this.setState({ monthly: "monthly-active", yearly: "yearly-hidden", activeButton: "btn-monthly" });
    }

    yearlyHandler = () => {
        this.setState({ monthly: "monthly-hidden", yearly: "yearly-active", activeButton: "btn-yearly" });
    }

    render() {
        return (
            <>
                <Wrapper style={{ height: "950px", overflow: "hidden" }}>
                    <Title>
                        <Text variant="h2">Appik Prices</Text>
                        <Text variant="p">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.</Text>
                    </Title>
    
                    <ButtonBox>
                        <BtnBackground className={this.state.activeButton}/>
                        <ToggleButton onClick={this.monthlyHandler}>
                            <Text fontSize={16} fontFamily='"Montserrat", sans-serif' fontWeight={700} color="black">MONTHLY</Text>
                        </ToggleButton> 
                        <ToggleButton onClick={this.yearlyHandler}>
                            <Text fontSize={16} fontFamily='"Montserrat", sans-serif' fontWeight={700} color="black">YEARLY</Text>
                        </ToggleButton>
                    </ButtonBox>
    
                    <Div>
                        <Flex flexWrap="wrap" className={this.state.monthly}>
                            { prices.map( (item, index) => {
                                return (
                                    <Box width={1/3} key={index} px={10}>
                                        <Card>
                                            <MainTitle className="underline">
                                                <Text variant="h3">{item.title}</Text>
                                            </MainTitle>
    
                                            <SubTitle>
                                                <Text variant="h4">{item.monthlyPrice}</Text>
                                            </SubTitle>
    
                                            <Ul>
                                                { item.features.map( (feature, ind) => (
                                                    <li key={ind}>
                                                        <MyText variant="p">{feature}</MyText>
                                                    </li>
                                                ) ) }
                                            </Ul>
    
                                            <MyButton>BUY NOW</MyButton>
                                        </Card>
                                    </Box>
                                )
                            } ) }
                        </Flex>
    
                        <Flex flexWrap="wrap" className={this.state.yearly}>
                            { prices.map( (item, index) => {
                                return (
                                    <Box width={1/3} key={index} px={10}>
                                        <Card>
                                            <MainTitle className="underline">
                                                <Text variant="h3">{item.title}</Text>
                                            </MainTitle>
    
                                            <SubTitle>
                                                <Text variant="h4">{item.yearlyPrice}</Text>
                                            </SubTitle>
    
                                            <Ul>
                                                { item.features.map( (feature, ind) => (
                                                    <li key={ind}>
                                                        <MyText variant="p">{feature}</MyText>
                                                    </li>
                                                ) ) }
                                            </Ul>
    
                                            <MyButton>BUY NOW</MyButton>
                                        </Card>
                                    </Box>
                                )
                            } ) }
                        </Flex>
                    </Div>
                </Wrapper>
                <Bg />
            </>
        )
    }
}