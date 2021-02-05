import styled from 'styled-components'
import theme from './theme'

export const Button = styled.button`
  min-width: 200px;
  background-color: ${({ highlight }) => ( highlight ? theme.colors.highlight : theme.colors.lightGray )};
  outline: none;
  cursor: pointer;

  border: none;
  border-radius: 32px;

  margin: ${({margin}) => margin};
  margin-left: ${marginLeft => marginLeft};
  margin-right: ${marginRight => marginRight};
  margin-bottom: ${({marginBottom}) => marginBottom};
  
  padding: ${({padding}) => padding ? padding : "16px 36px"};

  font-size: 16px;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;

  transition: all 0.2s;

  :hover {
    background-color: ${({ highlight }) => ( highlight ? '#FFE500' : theme.colors.highlight )};
  }

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    font-size: 13px;
  }
`