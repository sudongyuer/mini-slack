import React from 'react'
import styled from 'styled-components'
import { AccountCircleSharp ,AccessTime} from '@mui/icons-material';
function Header() {
  return (
    <HeaderContainer>
      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar />
        <AccessTime/>
      </HeaderLeft>
      {/* Header Search */}
      {/* Header Right */}
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: center;
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

export default Header
