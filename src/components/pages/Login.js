import {
  PageLayout,
  Input,
  PasswordInput,
  Button,
  Spinner,
} from 'components/common'
import React, { Component, useState, useEffect } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }

  > ${Button}:first-of-type {
    margin-top: 20px;
  }

  > ${Input} {
    margin-top: 20px;
  }

  > span {
    margin-top: 10px;
  }
`
export default function Login(props) {
  const [formFields, setFormFields] = useState({
    username: '',
    password: '',
  })

  let timeOut

  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    e.persist()
    setFormFields((s) => ({
      ...s,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    timeOut = setTimeout(() => {
      setLoading(false)
    }, 2000)
  }
  useEffect(() => {
    return () => {
      if (timeOut) {
        clearTimeout(timeOut)
      }
    }
  }, [timeOut])

  console.log(props)
  console.log(props.xyz + 'print')

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <span>Login if you have an account</span>
        {loading ? (
          <Spinner />
        ) : (
          <React.Fragment>
            <Input
              value={formFields.username}
              type='text'
              onChange={handleInputChange}
              name='username'
              placeholder='username'
            ></Input>
            <PasswordInput
              value={formFields.password}
              onChange={handleInputChange}
              name='password'
            ></PasswordInput>
          </React.Fragment>
        )}
        <Button large type='submit' disabled={loading}>
          {loading ? 'Please wait...' : 'Login'}
        </Button>
        {loading ? (
          ''
        ) : (
          <React.Fragment>
            <div className='alt-text'>or</div>
            <Button secondary type='button'>
              Register
            </Button>
          </React.Fragment>
        )}
      </Form>
    </PageLayout>
  )
}
