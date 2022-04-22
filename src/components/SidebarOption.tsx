import type { SvgIconComponent } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/firebase'
import { enterRoom } from '@/features/appSlice'
import { useAppDispatch } from '@/app/hooks'
interface SidebarOptionProps {
  Icon?: SvgIconComponent
  title: string
  addChannelOption?: boolean
  id?: string
  secretKey?: string | null
}

function SidebarOption({ Icon, title, addChannelOption, id, secretKey }: SidebarOptionProps) {
  const dispatch = useAppDispatch()
  const addChannel = async() => {
    const channelName = prompt('Please enter the channel name')
    if (!channelName)
      return
    const isSecret = window.confirm('Are you sure you want to make this channel secret?')
    let secretKey
    if (isSecret)
      secretKey = prompt('Please enter the secret key')
    try {
      const docRef = await addDoc(collection(db, 'rooms'), secretKey?.trim()
        ? {
            name: channelName,
            secretKey,
          }
        : {
            name: channelName,
          })
      console.log('Document written with ID: ', docRef.id)
    }
    catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  const selectChannel = () => {
    if (secretKey) {
      const inputSecretKey = prompt('Please enter the secret key')
      if (inputSecretKey === secretKey && id)
        dispatch(enterRoom({ roomId: id }))
      else
        alert('Wrong secret key')
    }
    else {
      if (id)
        dispatch(enterRoom({ roomId: id }))
    }
  }
  return (
    <SidebarContainer
    onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon
        ? (
        <h3>
          {title}
        </h3>
          )
        : (
        <SidebarOptionChannel>
          <span>#</span>{title}
        </SidebarOptionChannel>
          )
      }
    </SidebarContainer>
  )
}

export default SidebarOption

const SidebarContainer = styled.div`
display: flex;
font-size: 12px;
align-items: center;
padding-left: 2px;
cursor: pointer;

:hover{
  opacity: 0.9;
  background-color: #439bfb;
}

>h3{
  font-weight: 500;
}

> h3 >span {
  padding: 15px;
}
`

const SidebarOptionChannel = styled.h3`
padding: 10px 0;
font-weight: 300;
`
