import React from 'react'
import { H4, P } from '../../styles/GlobalStyles'

export default function TextBlock({ h4, p, mb }) {

    const main = <div>
        <H4 style={{ marginBottom: "20px" }}>{h4}</H4>
        <P>{p}</P>
    </div>

    const block = mb ? <div style={{ marginBottom: "80px" }}>
        { main }
    </div> : <div>
        { main }
    </div>

    return (
        <div>{ block }</div>
    )
}