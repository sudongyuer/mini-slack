import { useRef, useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Siderbar'
import Chat from './components/Chat'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth } from './firebase'
import Login from './components/Login'
function App() {
  const [user,loading] = useAuthState(auth)
  return (
    <div className="App">
      {
        !user?(
          <Login/>
        ):(
          <>
          <Header/>
          <AppBody>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Chat/>}/>
            </Routes>
          </AppBody>
          </>
        )
      }
  
    </div>
  )
}

export default App

const AppBody = styled.div`
display: flex;
height: 100vh;
`
