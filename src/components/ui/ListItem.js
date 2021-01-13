import React from 'react'
import TextBlock from './TextBlock'

export default function ListItem({ img, alt, h4, p, mb }) {
    return (
        <div className="row">
            <div className="col-2">
                <img src={img} atl={alt} />
            </div>

            <div className="col-10">
                <TextBlock mb={mb} h4={h4} p={p} />
            </div>
        </div>
    )
}
