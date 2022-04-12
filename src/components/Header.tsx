import React from 'react'
import styled from 'styled-components'
import { AccountCircleSharp, AccessTime, Search , HelpOutline } from '@mui/icons-material';
function Header() {
  return (
    <HeaderContainer>
      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar />
        <AccessTime />
      </HeaderLeft>
      {/* Header Search */}
      <HeaderSearch>
        <Search />
        <input placeholder="Search" type="text" />
      </HeaderSearch>
      {/* Header Right */}
      <HeaderRight>
        <HelpOutline />
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
const HeaderAvatar = styled(AccountCircleSharp)`
  cursor: pointer;
  :hover{
    opacity: 0.8;
  }
`
const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
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
> .MuiSvgIcon-root{
  margin-left: auto;
  margin-right: 20px;
}
`

export default Header
