import React from 'react'
import styled from 'styled-components'
import { Wrapper, Button, Image } from '../styles'
import { Text } from "../components"
import cover from '../assets/img/DownloadCover.png'
import { platform } from '../data/platform'
import theme from '../styles/theme'

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
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 60px;

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
  }
`

const MyButton = styled(Button)`
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    margin: 0;
    max-width: 200px;

    :not(:last-child) {
      margin-bottom: 20px;
    }
  }
`

const MyWrapper = styled(Wrapper)`
  padding: 125px 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default function Download() {
  return (
    <Bg id="download">
      <MyWrapper minHeight="100vh">
        <Text variant="h1" textAlign="center" color="white" mb={38} px={20}>
          Download the App <br />
          and Start Your Works for Business Now.
        </Text>

        <BtnGroup>
          <MyButton highlight marginRight="12px">DOWNLOAD APP</MyButton>
          <MyButton marginLeft="12px">CONTACT US</MyButton>
        </BtnGroup>

        <Support>
          {platform.map((logo, i) => (
            <Image margin="0 45px" maxWidth="52px" height="auto" key={i} src={logo.src} alt={logo.alt} />
          ))}
        </Support>
      </MyWrapper>
    </Bg>
  )
}