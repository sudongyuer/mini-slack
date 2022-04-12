import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import styled from 'styled-components';
import Sidebar from './components/Siderbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <AppBody>
        <Sidebar />
        <Routes>
          <Route path="/" />
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
