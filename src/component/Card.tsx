import React from 'react'
import styled from 'styled-components'
import { ICard } from './Types'
import Inout from './Inout'
import Button from './Button'
import {NavLink} from "react-router-dom"

const Card: React.FC<ICard> = ({inputtitle, buttontitle, onClick, inputtitle1, inputtitle2, text, route}) => {
  return (
      <Container>
          <Text>{inputtitle}</Text>
          <Inout
              title={inputtitle}
              sign={true}
              request={true}
              title2={inputtitle2}
              title1={inputtitle1}

          />

          <Button
              buttontitle="Signup"
              c="white"
              bg="red"
              onClick={onClick}
          />


          <Context >Already have an account, <NavLink to="/Signin">
              <span>Create one</span>
          </NavLink></Context>

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
const Context = styled.div`
    display: flex;
    margin-top: 20px;

    span{
        margin-left: 30px;
        font-weight: bold;
        :hover{
            cursor: pointer;
            transform: scale(100%);
        }
    }
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