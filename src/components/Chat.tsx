import React from 'react'
import styled from 'styled-components'
import {StarBorder,InfoOutlined} from '@mui/icons-material';
function Chat() {
  return (
    <ChatContainer>
      <Header>
        <HeaderLeft>
          <h4><strong>#Room-name</strong></h4>
          <StarBorder/>
        </HeaderLeft>
        <HeaderRight>
          <p>
          <InfoOutlined/> Details
          </p>
        </HeaderRight>
      </Header>
    </ChatContainer>
  )
}

export default Chat

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`

const HeaderLeft = styled.div`
display: flex;
align-items: center;

  >h4{
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }

  >h4 > .MuiSvgIcon-root{
    margin-left: 20px;
    font-size: 18px;
  }
`

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`

const ChatContainer = styled.div`
flex:0.7;
flex-grow: 1;
overflow-y: scroll;
margin-top: 46px;
`
