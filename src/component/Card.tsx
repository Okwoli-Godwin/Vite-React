import React from 'react'
import styled from 'styled-components'
import { ICard } from './Types'
import Inout from './Inout'
import Button from './Button'

const Card: React.FC<ICard> = ({title, buttontitle, onClick}) => {
  return (
      <Container>
          <Text>{title}</Text>
          <Inout title="password" sign={true} request={false} title1="Email" title2="name"/>

          <Button
              buttontitle="Signup"
              c="white"
              bg="red"
              onClick={onClick}
          />
    </Container>
  )
}

export default Card
const Form = styled.form`
    width: 350px;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Input = styled.input`
    border-radius: 4px;
    border: 1px solid gray;
    height: 20px;
    outline: none;
    width: 50%;
    background-color: beige;
`
const Field = styled.div`
    display: flex;
    flex-direction: column;
`

const Text = styled.div`
    margin-top: 40px;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 40px;
`

const Container = styled.div`
    width: 400px;
    min-height: 600px;
    border-radius: 10px;
    border-color: silver;
    background-color: green;
    display: flex;
    flex-direction: column;
    align-items: center;
`