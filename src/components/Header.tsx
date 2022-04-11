import React from 'react'
import styled from 'styled-components'
import { AccountCircleSharp } from '@mui/icons-material';
function Header() {
  return (
    <HeaderContainer>
      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar />
      </HeaderLeft>
      {/* Header Search */}
      {/* Header Right */}
      <Hello/>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div``
const HeaderLeft = styled.div`
background-color: red;
`
const HeaderAvatar = styled(AccountCircleSharp)`
  color:green;
`
const Hello1 =function({className}:any){
  return <div className={className}>123</div>
}

const Hello =styled(Hello1)`
background-color: pink;
`

export default Header
