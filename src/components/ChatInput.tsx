import { collection, doc, serverTimestamp, setDoc,addDoc } from 'firebase/firestore'
import { Button } from '@mui/material'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { db } from '@/firebase'
function ChatInput({ channelId, channelName ,chatRef }: any) {
  const [input, setInput] = useState('')
  const sendMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()// prevent refresh
    if (!channelId)
      return false
    const docRef = doc(db, 'rooms', channelId)
    const colllectionRef=collection(docRef, 'messages')
    addDoc(colllectionRef, {
      message: input,
      timestamp: serverTimestamp(),
      user: 'Sudongyuer',
      userImage: 'https://p9-passport.byteacctimg.com/img/user-avatar/1a85c9561d83fc5e8a441432767677fb~300x300.image',
    })
    //返回的是doc的ID
    // .then((outFiled)=>{
    //   console.log(outFiled.id)
    // })
    chatRef?.current?.scrollIntoView({ behavior: 'smooth' })
    setInput('')
  }
  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          placeholder={`Message #${channelName}`}
          onChange={e => setInput(e.target.value)}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  )
}

export default ChatInput

const ChatInputContainer = styled.div`
border-radius: 20px;
> form{
  position: relative;
  display: flex;
  justify-content: center;
}

> form > input{
   position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
}

> form >button{
  display: none !important;
}
`
