import React from 'react'
import styled from 'styled-components'

import { Button, Wrapper } from '../styles/MyStyles'
import { platform } from '../data/platform'
import { Text, Box, Flex } from "../components"
import theme from '../styles/theme'

import cover from '../assets/img/cover.png'
import mobile from '../assets/logo/TwoMobile.svg'

const CoverWrapper = styled(Wrapper)`
    padding-bottom: 0;
`

const CoverContainer = styled.div`
    background-image: linear-gradient(rgba(110, 79, 204, 0.9), rgba(35, 79, 167, 0.9)), url(${cover});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    margin-bottom: 150px;
    padding-top: 60px;
`

const Content = styled.div`
    margin-left: 100px;

    @media only screen and (max-width: ${theme.breakpoints.lg}) {
        margin-left: 0;
    }

    @media only screen and (max-width: ${theme.breakpoints.md}) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const Title = styled.div`
    margin-bottom: 30px;

    @media only screen and (max-width: ${theme.breakpoints.md}) {
        text-align: center;
    }
`

const Support = styled.div`
    margin: 62px 0;

    @media only screen and (max-width: ${theme.breakpoints.md}) {
        margin-top: 50px;
        margin-bottom: 0;
    }
`

const Image = styled.img`
    width: 100%;
    max-width: ${props => props.maxWidth};
    height: auto;
    :not(:last-child) {
        margin-right: 54px;
    }
`
const MobileImage = styled.div`
    text-align: right;
    margin-right: 50px;
    position: relative;

    .mobile {
        position: relative;
        bottom: -80px;
        z-index: 100;
    }

    @media only screen and (max-width: ${theme.breakpoints.lg}) {
        margin-top: 60px;
        margin-right: 0;

        .mobile {
            max-width: 350px;
        }
    }

    @media only screen and (max-width: ${theme.breakpoints.md}) {
        margin: 0 auto;
        text-align: center;
        bottom: 20px;

        .mobile {
            max-width: 212px;
        }
    }
`

export default function Cover() {
    return (
        <>
            <CoverContainer>
                <CoverWrapper>
                    <Flex flexWrap="wrap">
                        <Box width={[1, 1, 1/2]} pr={2} mt={100}>
                            <Content>
                                <Title>
                                    <Text variant="h5" color="highlight">10% OFF</Text>
                                    <Text variant="h1" color="white">
                                        Life Makes Easy <br />
                                        Use your Appik App.
                                    </Text>
                                </Title>

                                <Button highlight>DOWNLOAD</Button>

                                <Support>
                                    {platform.map((logo, i) => (
                                        <Image maxWidth="46px" key={i} src={logo.src} alt={logo.alt} />
                                    ))}
                                </Support>
                            </Content>
                        </Box>

                        <Box width={[1, 1, 1/2]}>
                            <MobileImage>
                                <Image className="mobile" maxWidth="412px" src={mobile} alt="Two Mobile" />
                            </MobileImage>
                        </Box>
                    </Flex>
                </CoverWrapper>
            </CoverContainer>
        </>
    )
}