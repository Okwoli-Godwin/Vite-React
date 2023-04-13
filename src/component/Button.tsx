import React from 'react'
import styled from "styled-components"
import { IButton } from './Types'

const Button: React.FC<IButton> = ({buttontitle, c, bg, onClick}) => {
  return (
    <Container onClick={onClick} bg="red" c="black">
      <Text>{buttontitle}</Text>
    </Container>
  )
}

export default Button

const Text = styled.div`
  
`

const Container = styled.div<{ bg: string;  c: string}>`
  width: 50%;
  height: 40px;
  background-color: ${({ bg }) => bg};
  color: ${({ c }) => c};
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover{
    cursor: pointer;
    transform: scale();
  }
`