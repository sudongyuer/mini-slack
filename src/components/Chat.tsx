import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { InfoOutlined, StarBorder } from '@mui/icons-material'
import { collection, doc,orderBy,query } from 'firebase/firestore'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import ChatInput from './ChatInput'
import { useAppSelector } from '@/app/hooks'
import { selectRoomId } from '@/features/appSlice'
import { db } from '@/firebase'
import Message from './Message'

function Chat() {
  const chatRef = useRef<HTMLDivElement>(null)
  const roomId = useAppSelector(selectRoomId)
  const docRef = roomId && doc(db, 'rooms', roomId as string)
  const [roomDetails] = useDocument(docRef as any)
  const [roomMessages,loading] = useCollection(roomId as null && query(collection( db,'rooms',roomId as string,'messages'),orderBy('timestamp','asc')))
  console.log('roomDetails',roomDetails?.data())
  // TODO
  console.log('roomMessage',roomMessages?.docs[0]?.data())

  useEffect(()=>{
    chatRef?.current?.scrollIntoView({ behavior: 'smooth' })
  },[roomId,loading])
  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4><strong>#{roomDetails?.data()?.name}</strong></h4>
            <StarBorder />
          </HeaderLeft>
          <HeaderRight>
            <p>
              <InfoOutlined /> Details
            </p>
          </HeaderRight>
        </Header>

        <ChatMessages>
          {/* List out the messages */}
          {roomMessages?.docs.map(doc=>{
            const {message , timestamp , user ,userImage}= doc.data()
            return (
              <Message 
                key={doc.id}
                message={message}
                timestamp={timestamp}
                user={user}
                userImage={userImage}
              />
            )
          })}
          <ChatButtom ref={chatRef}/>
        </ChatMessages>
        <ChatInput channelName={roomDetails?.data()?.name} channelId={roomId} />
      </>
    </ChatContainer>
  )
}

export default Chat

const ChatButtom = styled.div`
padding-bottom: 200px;
background-color: red;
`

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
