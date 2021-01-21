import React from 'react'
import styled from 'styled-components'
import { Box, Flex, Text } from "../components"
import { Wrapper, Title } from '../styles/MyStyles'
import ListItem from './ui/ListItem'
import { how } from '../data/how'

import control from '../assets/logo/Control.svg'
import bg from '../assets/img/bg.svg'


const Bg = styled.div`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: 0 220px;
    background-size: auto 460px;
`

const Image = styled.img`
    max-width: ${props => props.maxWidth};
    height: ${props => props.height};
    margin-left: ${props => props.marginLeft};
`

export default function HowItWorks() {
    return (
        <Bg>
            <Wrapper>
                <Title>
                    <Text variant="h2">How it Works</Text>
                    <Text variant="p">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</Text>
                </Title>

                <Flex flexWrap="wrap">
                    <Box width={1/2}>
                        <Image maxWidth="42%" height="auto" marginLeft="130px" src={control} alt="Control" />
                    </Box>

                    <Box width={1/2}>
                        { how.map( (item, index) => {
                            if (index === how.length - 1)
                                return <ListItem key={index} img={item.src} alt={item.alt} title={item.title} details={item.details} />
                            else 
                                return <ListItem mb key={index} img={item.src} alt={item.alt} title={item.title} details={item.details} />
                        } ) }
                    </Box>
                </Flex>
            </Wrapper>
        </Bg>
    )
}