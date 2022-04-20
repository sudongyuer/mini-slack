import './App.css'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { useAuthState } from 'react-firebase-hooks/auth'
import Header from './components/Header'
import Sidebar from './components/Siderbar'
import Chat from './components/Chat'
import { auth } from './firebase'
import Login from './components/Login'

function App() {
  const [user, loading] = useAuthState(auth)
  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
            src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
            alt=""
          />
        </AppLoadingContents>
      </AppLoading>
    )
  }
  return (
    <div className="App">
      {
        !user
          ? (
          <Login/>
            )
          : (
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

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`
