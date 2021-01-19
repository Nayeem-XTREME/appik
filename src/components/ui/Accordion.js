import React from 'react'
import styled from 'styled-components'
import { Text } from "../../components"
import theme from '../../styles/theme'

import plus from '../../assets/logo/Plus.svg'
import minus from '../../assets/logo/Minus.svg'

const Main = styled.div`
  .show {
    height: 80px;
    opacity: 1;
  }
`

const Heading = styled.div`
  color: ${theme.colors.defaultText};
  padding-bottom: 20px;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${theme.colors.gray3};

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

export default function Accordion({ title, active, setActive }) {
  return (
    <Main>
      <Heading>
        <Text variant="h5" fontWeight="300">{title}</Text>
        <span onClick={() => setActive(title)}>
          <Img src={active === title ? minus : plus} alt="Button" />
        </span>
      </Heading>

      <Content className={(active === title ? "show" : "")}>
        <Text variant="p">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</Text>
      </Content>
    </Main>
  )
}
