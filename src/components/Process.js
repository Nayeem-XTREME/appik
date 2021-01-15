import React from 'react'
import TextBlock from './ui/TextBlock'
import { Wrapper, Title } from '../styles/MyStyles'
import { Box, Flex, Text } from "../components"

import mobile from '../assets/logo/Mobile.svg'

export default function Process() {
    return (
        <Wrapper>
            <Title>
                <Text variant="h2">Easy Process With Best Features</Text>
                <Text variant="p">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</Text>
            </Title>

            <Flex alignItems="center" flexWrap = "wrap">
                <Box width={1/3}>
                    <TextBlock mb title="Loaded with features" details="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use." />
                    <TextBlock title="Devices Friendly" details="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use." />
                </Box>

                <Box width={1/3} style={{ display: "flex", justifyContent: "center" }}>
                    <img style={{ maxWidth: "75%", width: "auto" }} src={ mobile } alt="Features" />
                </Box>

                <Box width={1/3}>
                    <TextBlock mb title="Update Forever" details="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use." />
                    <TextBlock title="Superb UX/UI" details="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use." />
                </Box>                
            </Flex>
        </Wrapper>
    )
}