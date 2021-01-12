import React from 'react'
import styled from 'styled-components'

import { H1, H4, H5, Button, Wrapper } from '../../styles/GlobalStyles'
import cover from '../../assets/img/cover.png'
import mobile from '../../assets/logo/TwoMobile.svg'
import { platform } from '../../data/platform'


export default function Cover() {

    console.log(platform);

    return (
        <>
            <CoverContainer/>
            <Wrapper>
                <Content>
                    <Title>
                        <H4 highlight="true">10% OFF</H4>
                        <H1 white="true">
                            Life Makes Easy <br />
                            Use your Appik App.
                        </H1>
                    </Title>

                    <Button>
                        <H5>DOWNLOAD</H5>
                    </Button>

                    <Support>
                        {platform.map((logo, i) => (
                            <Img key={i} src={logo.src} alt={logo.alt} />
                        ))}
                    </Support>

                    <Mobile>
                        <img src={mobile} alt="Two Mobile" />
                    </Mobile>
                </Content>
            </Wrapper>
        </>
    )
}

const CoverContainer = styled.div`
    background-image: linear-gradient(rgba(35, 79, 167, 0.9), rgba(110, 79, 204, 0.9)), url(${cover});
    position: absolute;
    width: 100%;
    height: 750px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -10;
    overflow: hidden;
`

const Content = styled.div`
    margin-left: 150px;
    margin-top: 135px;
`

const Title = styled.div`
    margin-bottom: 40px;
`
const Support = styled.div`
    margin-top: 83px;
`

const Img = styled.img`
    :not(:last-child) {
        margin-right: 72px;
    }
`
const Mobile = styled.div`
    position: absolute;
    top: -25px;
    right: 50px;
`