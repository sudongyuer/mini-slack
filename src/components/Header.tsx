import React from 'react'
import styled from 'styled-components'
import { AccessTime, GitHub, HelpOutline, Search } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase'
function Header() {
  const [user] = useAuthState(auth)
  return (
    <HeaderContainer>
      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar
        onClick={() => {
          auth.signOut()
        }}
        alt={user?.displayName as string}
        src={user?.photoURL as string}
        />
        <AccessTime />
      </HeaderLeft>
      {/* Header Search */}
      <HeaderSearch>
        <Search />
        <input placeholder="Search" type="text" />
      </HeaderSearch>
      {/* Header Right */}
      <HeaderRight>
        <span>star🌟</span>
        <GitHubContainer
        onClick={() => {
          window.open('https://github.com/sudongyuer/mini-slack', '_blank')
        }}
        />
      </HeaderRight>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color:white
`
const HeaderLeft = styled.div`
  flex:0.3;
  display: flex;
  align-items: center;
  margin-left: 30px;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover{
    opacity: 0.8;
  }
`
const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #3b454c;
  text-align: center;
  display: flex;
  padding: 0 30px;
  color: gray;
  border: 1px gray solid;
  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: white;
  }
`
const HeaderRight = styled.div`
flex: 0.3;
display: flex;
align-items: center;
>span{
  flex: 1;
  margin-left: auto;
  text-align: right;
  font-weight: 500;
  padding-right: 10px;
}
>.MuiSvgIcon-root{
  margin-left: auto;
  margin-right: 20px;
}
`
const GitHubContainer = styled(GitHub)`
cursor: pointer;
`

export default Header
