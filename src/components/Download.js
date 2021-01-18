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

export default function Download() {
  return (
    <Bg>
      <Wrapper style={{ padding: "125px 0", overflow: "hidden" }}>
          <Text variant="h1" textAlign="center" color="white" mb={37.5}>
            Download the App <br />
            and Start Your Works for Business Now.
          </Text>

          <BtnGroup>
            <Button style={{ marginRight: "11.5px" }}>
              <Text variant="h5">DOWNLOAD APP</Text>
            </Button>
            <Button style={{ marginLeft: "11.5px" }}>
              <Text variant="h5">CONTACT US</Text>
            </Button>
          </BtnGroup>

          <Support>
            {platform.map((logo, i) => (
              <img style={{ margin: "0 45px", maxWidth: "52.5px", height: "auto" }} key={i} src={logo.src} alt={logo.alt} />
            ))}
          </Support>
      </Wrapper>
    </Bg>
  )
}