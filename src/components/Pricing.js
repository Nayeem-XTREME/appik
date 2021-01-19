import React from 'react'
import styled from 'styled-components'

import { Box, Flex, Text } from "../components"
import { Wrapper, Title, Button } from '../styles/MyStyles'
import theme from '../styles/theme'
import { prices } from '../data/prices'

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
    margin: 24px 0 56.25px 0;
`

const Bg = styled.div`
    background-color: ${theme.colors.lightGray};
    width: 100%;
    margin-top: -380px;
    margin-bottom: 75px;
    height: 340px;
    z-index: -100;
`

export default function Pricing() {
    return (
        <>
        <Wrapper>
            <Title>
                <Text variant="h2">Appik Prices</Text>
                <Text variant="p">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.</Text>
            </Title>

            <Flex flexWrap="wrap">
                { prices.map( (item, index) => {
                    return (
                        <Box width={1/3} key={index} px={10}>
                            <Card>
                                <MainTitle className="underline">
                                    <Text variant="h3">{item.title}</Text>
                                </MainTitle>

                                <SubTitle>
                                    <Text variant="h4">{item.price}</Text>
                                </SubTitle>

                                <Ul>
                                    { item.features.map( (feature, ind) => (
                                        <li key={ind}>
                                            <Text variant="p" style={{ fontFamily: `"Roboto", sans-serif`, fontWeight: "400", color: "#666666", lineHeight: "30px" }}>
                                                {feature}
                                            </Text>
                                        </li>
                                    ) ) }
                                </Ul>

                                <Button style={{ display: 'inline-block', marginBottom: "62.25px", marginRight: "auto", marginLeft: "auto" }}>
                                    <Text variant="h5">BUY NOW</Text>
                                </Button>
                            </Card>
                        </Box>
                    )
                } ) }
            </Flex>
        </Wrapper>
        <Bg />
        </>
    )
}