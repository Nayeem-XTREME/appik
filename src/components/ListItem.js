import React from 'react'
import styled from 'styled-components'
import theme from '../styles/theme'
import TextBlock from './TextBlock'

import { Box, Flex } from "."

const ItemBox = styled(Flex)`
    @media only screen and (max-width: ${theme.breakpoints.md}) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`

const Image = styled.img`
    width: 100%;
    max-width: 80px;
    height: auto;

    @media only screen and (max-width: ${theme.breakpoints.md}) {
        margin-bottom: 20px;
        max-width: 75px;
    }
`

export default function ListItem({ img, alt, title, details, mb }) {
    return (
        <ItemBox flexWrap="wrap">
            <Box className="imageBox" width={[1, 1, 2/12]} px='8px' pt='1px'>
                <Image src={img} atl={alt} />
            </Box>

            <Box width={[1, 1, 10/12]} pl={[0, 0, 3]}>
                <TextBlock mb={mb} title={title} details={details} />
            </Box>
        </ItemBox>
    )
}