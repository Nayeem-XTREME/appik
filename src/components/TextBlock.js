import React from 'react'
import styled from 'styled-components'
import { Text } from "."
import theme from '../styles/theme'

const Div = styled.div`
    margin-bottom: ${({ marginBottom }) => ( marginBottom ? "50px" : "0" )};

    @media only screen and (max-width: ${theme.breakpoints.md}) {
        margin-bottom: ${({ marginBottom }) => ( marginBottom ? "30px" : "0" )};
    }
`

export default function TextBlock({ title, details, mb }) {
    const main = <div>
        <Text variant="h4" mb="15px">{title}</Text>
        <Text variant="p">{details}</Text>
    </div>

    const block = mb ? <Div marginBottom>
        { main }
    </Div> : <Div>
        { main }
    </Div>

    return (<div>{ block }</div>)
}