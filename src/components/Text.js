import React from 'react'
import styled from 'styled-components'
import { color, space, typography, layout, position } from 'styled-system'

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  ${color};
  ${space};
  ${typography};
  ${layout};
  ${position};
`
const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  ${color};
  ${space};
  ${typography};
  ${layout};
  ${position};
`
const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  ${color};
  ${space};
  ${typography};
  ${layout};
  ${position};
`
const H4 = styled.h4`
  color: ${({ theme }) => theme.colors.text};
  ${color};
  ${space};
  ${typography};
  ${layout};
  ${position};
`
const H5 = styled.h5`
  color: ${({ theme }) => theme.colors.text};
  ${color};
  ${space};
  ${typography};
  ${layout};
  ${position};
`

const H6 = styled.h6`
  color: ${({ theme }) => theme.colors.text};
  ${color};
  ${space};
  ${typography};
  ${layout};
  ${position};
`

const P = styled.p`
  color: ${({ theme }) => theme.colors.text};
  ${color};
  ${space};
  ${typography};
  ${layout};
  ${position};
`

const Caption = styled.p`
  font-size: calc(14px + (18 - 14) * ((100vw - 400px) / (1600 - 400)));
  color: ${({ theme }) => theme.colors.text};
  ${color};
  ${space};
  ${typography};
  ${layout};
  ${position};
`

const Text = ({ variant, theme, children, html, ...props }) => {
  switch (variant) {
    case 'h1':
      return (
        <H1 theme={theme} {...props}>
          {children}
        </H1>
      )
    case 'h2':
      return (
        <H2 theme={theme} {...props}>
          {children}
        </H2>
      )
    case 'h3':
      return (
        <H3 theme={theme} {...props}>
          {children}
        </H3>
      )
    case 'h4':
      return (
        <H4 theme={theme} {...props}>
          {children}
        </H4>
      )
    case 'h5':
      return (
        <H5 theme={theme} {...props}>
          {children}
        </H5>
      )
    case 'h6':
      return (
        <H6 theme={theme} {...props}>
          {children}
        </H6>
      )
    case 'caption':
      return (
        <Caption theme={theme} {...props}>
          {children}
        </Caption>
      )
    default:
      return (
        <P theme={theme} {...props}>
          {children}
        </P>
      )
  }
}

export default Text
