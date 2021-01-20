import React from 'react'
import styled from 'styled-components'

import { Button, Wrapper } from '../styles/MyStyles'
import { platform } from '../data/platform'
import { Text } from "../components"

import cover from '../assets/img/cover.png'
import mobile from '../assets/logo/TwoMobile.svg'

const CoverContainer = styled.div`
    background-image: linear-gradient(rgba(110, 79, 204, 0.9), rgba(35, 79, 167, 0.9)), url(${cover});
    position: absolute;
    width: 100%;
    height: 562.5px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -10;
    overflow: hidden;
`

const Content = styled.div`
    margin-left: 112.5px;
    margin-top: 101.25px;
    margin-bottom: 140px;
`

const Title = styled.div`
    margin-bottom: 30px;
`
const Support = styled.div`
    margin-top: 62.25px;
`

const Img = styled.img`
    height: 68px;
    :not(:last-child) {
        margin-right: 54px;
    }
`
const MobileImage = styled.div`
    position: absolute;
    top: -18.75px;
    right: 71.25px;
`

export default function Cover() {
    return (
        <>
            <CoverContainer/>
            <Wrapper>
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
                            <Img key={i} src={logo.src} alt={logo.alt} />
                        ))}
                    </Support>

                    <MobileImage>
                        <img style={{ height: "490px" }} src={mobile} alt="Two Mobile" />
                    </MobileImage>
                </Content>
            </Wrapper>
        </>
    )
}