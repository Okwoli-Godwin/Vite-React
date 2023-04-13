import React from 'react'
import styled from 'styled-components'
import { Iinput } from './Types'

const Inout: React.FC<Iinput> = ({title, title1, title2, sign, request}) => {


  return (
      <div>
          <Field>
              <Form>
                  <Input placeholder={title} />
                  {sign ? <Input placeholder={title1} /> : null}
                  {request ? <Input placeholder={title2} /> : null}
              </Form>
          </Field>
    </div>
  )
}

export default Inout

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
    height: 40px;
    outline: none;
    width: 300px;
    background-color: beige;
    margin: 20px;
`
const Field = styled.div`
    display: flex;
    flex-direction: column;
`