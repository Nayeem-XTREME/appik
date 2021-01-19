import React from 'react'
import { Text } from "../../components"

export default function TextBlock({ title, details, mb }) {
    const main = <div>
        <Text variant="h4" style={{ marginBottom: "15px" }}>{title}</Text>
        <Text variant="p">{details}</Text>
    </div>

    const block = mb ? <div style={{ marginBottom: "50px" }}>
        { main }
    </div> : <div>
        { main }
    </div>

    return (
        <div>{ block }</div>
    )
}