import { db } from '@/firebase'
import { collection, doc, setDoc ,serverTimestamp} from "firebase/firestore";
import { Button } from '@mui/material'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
function ChatInput({channelId,channelName}:any) {
  const [input,setInput] = useState('')
  const sendMessage = (e:React.MouseEvent<HTMLButtonElement>)=>{
      e.preventDefault()//prevent refresh
      if(!channelId){
        return false
      }
      const docRef = doc(db,'rooms',channelId)
      setDoc(docRef,{
        message:input,
        timestamp:serverTimestamp(),
        user: 'Sudongyuer',
        userImage:'https://p9-passport.byteacctimg.com/img/user-avatar/1a85c9561d83fc5e8a441432767677fb~300x300.image'
      },{merge:true});
      setInput('')
      
  }
  return (
    <ChatInputContainer>
      <form>
        <input
         value={input}
         placeholder={`Message #ROOM`}
         onChange={(e)=>setInput(e.target.value)}
        />
        <Button hidden type='submit' onClick={sendMessage}>
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
