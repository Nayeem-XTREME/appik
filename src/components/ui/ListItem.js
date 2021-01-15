import React from 'react'
import TextBlock from './TextBlock'

import { Box, Flex } from "../../components"

export default function ListItem({ img, alt, title, details, mb }) {
    return (
        <Flex flexWrap="wrap">
            <Box width={2/12} px='8px' pt='1px'>
                <img style={{ maxWidth: "100%", height: "auto" }} src={img} atl={alt} />
            </Box>

            <Box width={10/12} pl={3}>
                <TextBlock mb={mb} title={title} details={details} />
            </Box>
        </Flex>
    )
}