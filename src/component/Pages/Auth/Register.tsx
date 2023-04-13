import React from 'react'
import styled from 'styled-components'
import Card from '../../Card'

const Register = () => {
  return (
      <div>
          <Container>
              <Card
                  inputtitle1='Password'
                  inputtitle2='Email'
                  sign={true}
                  request={true}
                  buttontitle='Sign up'
                  title='Register'
                  inputtitle='Email'
                  onClick={() => {
                  console.log("me")
              }}/>
          </Container>
    </div>
  )
}

export default Register

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
`