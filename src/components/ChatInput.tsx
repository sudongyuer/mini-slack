import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { Button } from '@mui/material'
import React, { useRef, useState } from 'react'
import SendIcon from '@mui/icons-material/Send'
import styled from 'styled-components'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '@/firebase'
function ChatInput({ channelId, channelName, chatRef }: any) {
  const [user] = useAuthState(auth)
  const [input, setInput] = useState('')
  const sendMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()// prevent refresh
    if (input.trim() === '') {
      setInput('')
      return
    }

    if (!channelId)
      return false
    const docRef = doc(db, 'rooms', channelId)
    const colllectionRef = collection(docRef, 'messages')
    addDoc(colllectionRef, {
      message: input,
      timestamp: serverTimestamp(),
      user: user?.displayName,
      userImage: user?.photoURL,
    })
    // 返回的是doc的ID
    // .then((outFiled)=>{
    //   console.log(outFiled.id)
    // })
    chatRef?.current?.scrollIntoView({ behavior: 'smooth' })
    setInput('')
  }
  return (
    <ChatInputContainer>
      <form>
        <div>
        <input
          value={input}
          placeholder={`Message #${channelName}`}
          onChange={e => setInput(e.target.value)}
        />
        <Button type="submit" onClick={sendMessage} endIcon={<SendIcon/>}>
          SEND
        </Button>
        </div>
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

> form > div{
    position: fixed;
    bottom: 30px;
    padding: 10px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    outline: none;
    display: flex;
    justify-content: space-between;
}

> form > div >input{
    padding: 20px;
    outline: none;
    border: none;
}

>form>div>button{
  background-color: #c0bfc0 !important;
  color: white;
  text-transform: inherit;
}
`
