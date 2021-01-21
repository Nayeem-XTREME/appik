import styled from 'styled-components'
import theme from '../styles/theme'

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 30px;
  max-width: ${theme.breakpoints.xl};
  padding-bottom: 75px;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 75px;
  position: relative;

  h2 {
    margin-bottom: 20px;
  }

  p {
    width: 588px;
    text-align: center;
  }
`

export const Button = styled.button`
  min-width: 200px;
  height: 48px;
  background-color: ${({ highlight }) => ( highlight ? theme.colors.highlight : theme.colors.lightGray )};
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 32px;
  transition: all 0.2s;
  padding: 0 36px;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;

  :hover {
    background-color: ${({ highlight }) => ( highlight ? '#FFF' : theme.colors.highlight )};
  }
`

const Image = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  max-width: ${props => props.maxWidth};
  max-height: ${props => props.maxHeight};

  position: ${props => props.position};
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};

  margin: ${props => props.margin};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};

  padding: ${props => props.padding};
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  padding-top: ${props => props.paddingTop};
  padding-bottom: ${props => props.paddingBottom};
`