import React from 'react'
import styled from 'styled-components'
import { Wrapper, Button } from '../styles/MyStyles'
import { Text } from "../components"
import cover from '../assets/img/DownloadCover.png'
import { platform } from '../data/platform'

const Support = styled.div`
  display: flex;
  justify-content: center;
`

const Bg = styled.div`
  background-image: linear-gradient(rgba(110, 79, 204, 0.9), rgba(35, 79, 167, 0.9)), url(${cover});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`

const MyButton = styled(Button)`
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
`

const Image = styled.img`
  max-width: ${props => props.maxWidth};
  height: ${props => props.height};
  margin: ${props => props.margin};
`

export default function Download() {
  return (
    <Bg>
      <Wrapper style={{ padding: "125px 0", overflow: "hidden" }}>
          <Text variant="h1" textAlign="center" color="white" mb={38}>
            Download the App <br />
            and Start Your Works for Business Now.
          </Text>

          <BtnGroup>
            <MyButton marginRight="12px">DOWNLOAD APP</MyButton>
            <MyButton marginLeft="12px">CONTACT US</MyButton>
          </BtnGroup>

          <Support>
            {platform.map((logo, i) => (
              <Image margin="0 45px" maxWidth="52px" height="auto" key={i} src={logo.src} alt={logo.alt} />
            ))}
          </Support>
      </Wrapper>
    </Bg>
  )
}