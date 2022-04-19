import { useRef, useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Siderbar'
import Chat from './components/Chat'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Header/>
      <AppBody>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Chat/>}/>
        </Routes>
      </AppBody>
    </div>
  )
}

export default App

const AppBody = styled.div`
display: flex;
height: 100vh;
`
