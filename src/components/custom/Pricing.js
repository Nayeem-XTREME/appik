import React from 'react'
import styled from 'styled-components'
import { H2, H3, H4, H5, P, Wrapper, Title, Button } from '../../styles/GlobalStyles'
import theme from '../../styles/theme'

import { prices } from '../../data/prices'

export default function Pricing() {
    return (
        <Wrapper>
            <Title>
                <H2>Appik Prices</H2>
                <P>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.</P>
            </Title>

            <div className="row">

                { prices.map( (x, i) => {
                    return (
                        <div className="col-4" key={i}>
                            <Card className="card">
                                <MainTitle>
                                    <H3>{x.title}</H3>
                                </MainTitle>

                                <SubTitle>
                                    <H4>{x.price}</H4>
                                </SubTitle>

                                <Ul>
                                    { x.features.map( (feature, index) => (
                                        <li key={index}>
                                            <H5 style={{ fontFamily: `"Roboto", sans-serif`, fontWeight: "400", color: "#666666", lineHeight: "40px" }}>
                                                {feature}
                                            </H5>
                                        </li>
                                    ) ) }
                                </Ul>

                                <Button style={{ marginBottom: "83px", marginLeft: "auto", marginRight: "auto" }}>
                                    <H5>BUY NOW</H5>
                                </Button>
                            </Card>
                        </div>
                    )
                } ) }

            </div>
        </Wrapper>
    )
}

const Card = styled.div`
    border: 1px solid ${theme.colors.lightGray};
    border-radius: 10px;
`

const MainTitle = styled.div`
    text-align: center;
    margin-top: 44px;
    padding: 0 72px;

    :after {
        content: "";
        display: block;
        width: 100%;
        height: 4px;
        background-color: ${theme.colors.lightGray};
        border-radius: 10px;
        margin: 44px auto 0 auto;
    }
`

const SubTitle = styled.div`
    text-align: center;
    margin-top: 44px;
    padding: 0 135px;

    :after {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background-color: ${theme.colors.veryLightGray};
        border-radius: 10px;
        margin: 44px auto 0 auto;
    }
`

const Ul = styled.ul`
    list-style: none;
    text-align: center;

    margin-top: 32px;
    margin-bottom: 75px;
`