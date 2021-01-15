import React from 'react'
import styled from 'styled-components'
import { Box, Flex, Text } from "../components"
import { Wrapper, Title, Button } from '../styles/MyStyles'
import theme from '../styles/theme'

import { prices } from '../data/prices'

export default function Pricing() {
    return (
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
                                <MainTitle>
                                    <Text variant="h3">{item.title}</Text>
                                </MainTitle>

                                <SubTitle>
                                    <Text variant="h4">{item.price}</Text>
                                </SubTitle>

                                <Ul>
                                    { item.features.map( (feature, ind) => (
                                        <li key={ind}>
                                            <Text variant="h5" style={{ fontFamily: `"Roboto", sans-serif`, fontWeight: "400", color: "#666666", lineHeight: "30px" }}>
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
    )
}

const Card = styled.div`
    border: 1px solid ${theme.colors.lightGray};
    border-radius: 10px;
    padding: auto 10px;

    display: flex;
    flex-direction: column;
`

const MainTitle = styled.div`
    text-align: center;
    margin-top: 33px;

    :after {
        content: "";
        display: block;
        width: 80%;
        height: 3px;
        background-color: ${theme.colors.lightGray};
        border-radius: 10px;
        margin: 33px auto 0 auto;
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