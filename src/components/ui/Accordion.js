import React from 'react'
import styled from 'styled-components'
import { Text } from "../../components"
import theme from '../../styles/theme'

import plus from '../../assets/logo/Plus.svg'
import minus from '../../assets/logo/Minus.svg'

const Main = styled.div`
  border-top: ${props => props.item === 'start' ? "none" : "1px solid #D1D1D1"};
  .show {
    height: 80px;
    opacity: 1;
  }
`

const Heading = styled.div`
  color: ${theme.colors.defaultText};
  margin-top: ${props => props.item === 'start' ? "0" : "20px"};
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    cursor: pointer;
  }
`

const Content = styled.div`
  height: 0;
  opacity: 0;
  display: flex;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
`

const Img = styled.img`
  width: 75%;
`

export default function Accordion({ title, description, active, setActive, item }) {
  return (
    <Main item={item}>
      <Heading item={item}>
        <Text variant="h5" fontWeight="300">{title}</Text>
        <span onClick={() => setActive(title)}>
          <Img src={active === title ? minus : plus} alt="Button" />
        </span>
      </Heading>

      <Content className={(active === title ? "show" : "")}>
        <Text variant="p">{description}</Text>
      </Content>
    </Main>
  )
}
