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
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div``
const HeaderLeft = styled.div` `
const HeaderAvatar = styled(AccountCircleSharp)`
  color:green;
`
const Hello1 =function({className}:any){
  return <div className={className}>123</div>
}

export default Header
