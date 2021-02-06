import React from 'react'
import styled from 'styled-components'
import { Text } from '.'
import theme from '../styles/theme'

import { FaPlus, FaMinus } from 'react-icons/fa'

const Main = styled.div`
  border-top: ${(props) =>
    props.item === 'start' ? 'none' : '1px solid #D1D1D1'};
  .show {
    min-height: 80px;
    height: 100%;
    padding-bottom: 20px;
    opacity: 1;
  }
`

const Heading = styled.div`
  color: ${theme.colors.defaultText};
  margin-top: ${(props) => (props.item === 'start' ? '0' : '20px')};
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
`

const Content = styled.div`
  height: 0;
  opacity: 0;
  display: flex;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
`

export default function Accordion({
  title,
  description,
  active,
  setActive,
  item,
}) {
  return (
    <Main item={item}>
      <Heading item={item} onClick={() => setActive(title)}>
        <Text variant="h5" fontWeight="300" mr={4}>
          {title}
        </Text>
        {active === title ? <FaMinus /> : <FaPlus />}
      </Heading>

      <Content className={active === title ? 'show' : ''}>
        <Text variant="p" pr={4}>
          {description}
        </Text>
      </Content>
    </Main>
  )
}
