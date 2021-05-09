import React, { useState } from 'react'
import styled from 'styled-components'
import { Input } from './Input'

const PasswordInputWrapper = styled.div`
  display: flex;
  ~ div {
    margin-bottom: 8px;
  }
`

const PasswordInputStyle = styled(Input).attrs((props) => ({
  type: 'password',
  placeholder: 'password',
}))`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`

const ToggleButton = styled.div`
  height: 40px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 0.9em;
  display: flex;
  padding: 8px;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: white;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  color: black;
`

export const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(true)
  return (
    <React.Fragment>
      <PasswordInputWrapper>
        <PasswordInputStyle {...props} />
        <ToggleButton
          onClick={() => {
            setShowPassword((s) => !s)
          }}
        >
          {!showPassword ? 'Show' : 'Hide'}
        </ToggleButton>
      </PasswordInputWrapper>
      <div>{showPassword ? props.value : ''}</div>
    </React.Fragment>
  )
}
