import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/"
          element={
            <h1>
              hello
            </h1>
          }
        >
        </Route>
      </Routes>
    </div>
  )
}

export default App
