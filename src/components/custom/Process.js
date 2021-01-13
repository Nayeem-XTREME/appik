import React from 'react'
import styled from 'styled-components'
import TextBlock from '../ui/TextBlock'
import { H2, P, Wrapper, Title } from '../../styles/GlobalStyles'

import mobile from '../../assets/logo/Mobile.svg'

export default function Process() {
    return (
        <Wrapper>
            
            <Title>
                <H2>Easy Process With Best Features</H2>
                <P>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</P>
            </Title>

            <Row className="row">
                <div className="col-4">
                    <TextBlock mb h4="Loaded with features" p="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use." />
                    <TextBlock h4="Devices Friendly" p="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use." />
                </div>

                <Mobile className="col-4">
                    <img src={ mobile } alt="Features" />
                </Mobile>

                <div className="col-4">
                    <TextBlock mb h4="Update Forever" p="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use." />
                    <TextBlock h4="Superb UX/UI" p="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use." />
                </div>                
            </Row>

        </Wrapper>
    )
}

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Mobile = styled.div`
    display: flex;
    justify-content: center;
`