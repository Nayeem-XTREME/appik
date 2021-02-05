import styled from 'styled-components'
import theme from '../styles/theme'

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 36px 30px;
  min-height: ${({minHeight}) => minHeight};
  max-width: ${theme.breakpoints.xl};

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    padding: 35px 15px;
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 75px;
  position: relative;
  text-align: center;

  h2 {
    margin-bottom: 20px;
  }

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    margin-bottom: 50px;
  }
`

export const Button = styled.button`
  min-width: 200px;
  background-color: ${({ highlight }) => ( highlight ? theme.colors.highlight : theme.colors.lightGray )};
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 32px;
  transition: all 0.2s;
  padding: 16px 36px;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;

  :hover {
    background-color: ${({ highlight }) => ( highlight ? '#FFE500' : theme.colors.highlight )};
  }

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    font-size: 13px;
  }
`

export const Image = styled.img`
  width: ${({width}) => width};
  max-width: ${({maxWidth}) => maxWidth};
  height: ${({height}) => height};
  max-height: ${({maxHeight}) => maxHeight};

  text-align: ${({textAlign}) => textAlign};

  margin: ${({margin}) => margin};
  margin-left: ${({marginLeft}) => marginLeft};
  margin-right: ${({marginRight}) => marginRight};
  margin-bottom: ${({marginBottom}) => marginBottom};
`