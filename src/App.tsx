import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/"
          element={
            <Header/>
          }
        >
        </Route>
      </Routes>
    </div>
  )
}

export default App
