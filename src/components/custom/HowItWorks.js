import React from 'react'
import styled from 'styled-components'
import { H2, P, Wrapper, Title } from '../../styles/GlobalStyles'
import ListItem from '../ui/ListItem'
import { how } from '../../data/how'

import control from '../../assets/logo/Control.svg'
import bg from '../../assets/img/bg.svg'

export default function HowItWorks() {

    console.log(bg);
    return (
        <Bg>
            <Wrapper>
                <Title>
                    <H2>How it Works</H2>
                    <P>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</P>
                </Title>

                <div className="row">
                    <div className="col-6">
                        <img style={{ height: "630px", marginLeft: "175px" }} src={control} alt="Control" />
                    </div>

                    <div className="col-6">
                        { how.map( (x, i) => {
                            if (i === how.length - 1)
                                return <ListItem key={i} img={x.src} alt={x.alt} h4={x.h4} p={x.p} />
                            else 
                                return <ListItem mb key={i} img={x.src} alt={x.alt} h4={x.h4} p={x.p} />
                        } ) }
                    </div>
                </div>
            </Wrapper>
        </Bg>
    )
}

const Bg = styled.div`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: 0 300px;
`
