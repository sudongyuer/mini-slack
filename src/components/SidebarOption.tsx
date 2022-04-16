import type { SvgIconComponent } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import {db} from '@/firebase'
import { collection, addDoc } from "firebase/firestore";

type SidebarOptionProps = {
  Icon?: SvgIconComponent,
  title: string,
  addChannelOption?: boolean
}


function SidebarOption({ Icon, title,addChannelOption }: SidebarOptionProps) {

const addChannel = async ()=>{

  const channelName = prompt('Please enter the channel name');
  try {
    const docRef = await addDoc(collection(db, "rooms"), {
      name:channelName,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const selectChannel = ()=>{
  console.log('select channel')
}
  return (
    <SidebarContainer
    onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize='small' style={{ padding: 10 }} />}
      {Icon ?(
        <h3>
          {title}
        </h3>
      ):(
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
  background-color: #340336;
}

>h3{
  font-weight: 500;
}

> h3 >span {
  padding: 15px;
}
`

const SidebarOptionChannel=styled.div``
