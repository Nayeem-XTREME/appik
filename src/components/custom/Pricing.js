import React from 'react'
import styled from 'styled-components'
import { H2, H4, H5, P, Wrapper, Title, Button } from '../../styles/GlobalStyles'
import theme from '../../styles/theme'

export default function Pricing() {
    return (
        <Wrapper>
            <Title>
                <H2>Appik Prices</H2>
                <P>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.</P>
            </Title>

            <div className="row">
                <Card className="col-4">
                    <MainTitle>
                        <H4>Basic</H4>
                    </MainTitle>
                    <SubTitle>
                        <H5>$199.00</H5>
                    </SubTitle>

                    <Button>
                        <H5>BUY NOW</H5>
                    </Button>
                </Card>

                <div className="col-4">
                    
                </div>

                <div className="col-4">
                    
                </div>
            </div>
        </Wrapper>
    )
}

const Card = styled.div`
    border: 1px solid ${theme.colors.lightGray};
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
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
