import React from 'react'
import styled from 'styled-components'
import Card from '../../Card'

const Signin = () => {
  return (
      <div>
          <Container>
              <Card
                 inputtitle1=''
                  inputtitle2=''
                  sign={false}
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

export default Signin

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
`