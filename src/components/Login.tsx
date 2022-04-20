import { Button } from '@mui/material'
import type { MouseEvent } from 'react'
import React from 'react'
import styled from 'styled-components'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '@/firebase'

function Login() {
  const signIn = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    signInWithPopup(auth, provider).catch((error) => {
      alert(error.message)
    })
  }
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt=""
        />
        <h1>Sign in to the Sudongyuer Fam</h1>
        <p>https://github.com/sudongyuer</p>
        <Button onClick={signIn}>
        Sign In With Google
      </Button>
      </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login
const LoginContainer = styled.div`
background-color: #f8f8f8;
display: grid;
height: 100vh;
place-content: center;
`
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

>img{
  object-fit: contain;
  height: 100px;
  margin-bottom: 40px;
}

> button{
  margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
}

`
