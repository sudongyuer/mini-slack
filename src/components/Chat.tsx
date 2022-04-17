import React, { useState } from 'react'
import styled from 'styled-components'
import {StarBorder,InfoOutlined} from '@mui/icons-material';
import { useAppSelector } from '@/app/hooks';
import { selectRoomId } from '@/features/appSlice';
import ChatInput from './ChatInput';
import { collection, doc } from 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';
import { db } from '@/firebase';
function Chat() {
  const roomId = useAppSelector(selectRoomId)

  const docRef = roomId && doc(db,'rooms',roomId as string)
  const [roomDetails]= useDocument(docRef as any) 
  //TODO
  console.log(roomDetails)
  return (
    <ChatContainer>
      <>
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

      <ChatMessages>
        {/* List out the messages */}
      </ChatMessages>
      <ChatInput channelId={roomId} />
      </>
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
const ChatMessages = styled.div``
