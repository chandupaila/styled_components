import styled from 'styled-components'

export const Heading = styled.h1`
  color: black;
  font-family: roboto;
`

export const CustomButton = styled.button`
  color: ${props => (props.outline ? 'white' : 'gray')};
  background-color: ${props => (props.outline ? 'gray' : 'white')};
  border-radius: 5px;
  padding: 10px 15px;
  outline: none;
  border: none;
  margin: 10px;
  border: solid 2px gray;
`
