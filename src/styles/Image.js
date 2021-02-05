import styled from 'styled-components'

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