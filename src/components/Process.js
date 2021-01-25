import React from 'react'
import styled from 'styled-components'
import TextBlock from './ui/TextBlock'
import { Wrapper, Title } from '../styles/MyStyles'
import { Box, Flex, Text } from "../components"
import theme from '../styles/theme'

import mobile from '../assets/logo/Mobile.svg'

const FirstBox = styled(Box)`
    @media only screen and (max-width: ${theme.breakpoints.md}) {
        padding: 0;
        margin-bottom: 50px;

        text-align: center;
    }
`

const LastBox = styled(Box)`
    @media only screen and (max-width: ${theme.breakpoints.md}) {
        padding: 0;
        text-align: center;
    }
`

const Image = styled.img`
    width: 100%;
    max-width: ${props => props.maxWidth};
    height: ${props => props.height};
`

const ImageBox = styled(Box)`
    display: flex;
    justify-content: center;

    @media only screen and (max-width: ${theme.breakpoints.md}) {
        display: none;
    }
`

export default function Process() {
    return (
        <Wrapper>
            <Title>
                <Text variant="h2">Easy Process With Best Features</Text>
                <Text variant="p">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</Text>
            </Title>

            <Flex alignItems="center" flexWrap = "wrap">
                <FirstBox width={[1, 1, 1/3]} pr={3}>
                    <TextBlock mb title="Loaded with features" details="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use." />
                    <TextBlock title="Devices Friendly" details="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use." />
                </FirstBox>

                <ImageBox width={[1, 1, 1/3]}>
                    <Image maxWidth="240px" width="auto" src={ mobile } alt="Features" />
                </ImageBox>

                <LastBox className="last" width={[1, 1, 1/3]} pl={3}>
                    <TextBlock mb title="Update Forever" details="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use." />
                    <TextBlock title="Superb UX/UI" details="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use." />
                </LastBox>                
            </Flex>
        </Wrapper>
    )
}