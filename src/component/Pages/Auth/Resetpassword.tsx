import React from 'react'
import styled from 'styled-components'
import Card from '../../Card'

const Register = () => {
  return (
      <div>
          <Container>
              <Card buttontitle='Sign up' title='Register' onClick={() => {
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