import { Add, Apps, BookmarkBorder, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { useCollection } from 'react-firebase-hooks/firestore'
import { addDoc, collection } from 'firebase/firestore'
import SidebarOption from './SidebarOption'
import { db } from '@/firebase'

function Sidebar() {
  const [channels, loading, error] = useCollection(collection(db, 'rooms'))
  console.log(channels)
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>SUDONGYUER🐟 FAM HQ</h2>
          <h3>
            <FiberManualRecord />
            Sudongyuer
          </h3>
        </SidebarInfo>
        <Create />
      </SidebarHeader>
      <SidebarOption Icon={InsertComment} title="Threads" />
      <SidebarOption Icon={Inbox} title="Mentions & reactions" />
      <SidebarOption Icon={Drafts} title="Saved items" />
      <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
      <SidebarOption Icon={PeopleAlt} title="People & user groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File browser" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOption Icon={Add} title="Add Channel" addChannelOption/>
      <ChannelsContainer>
      {channels?.docs.map((doc) => {
        return <SidebarOption id={doc.id} key={doc.id} title={doc.data().name} secretKey={doc.data().secretKey} />
      })
      }
      </ChannelsContainer>
    </SidebarContainer>
  )
}

export default Sidebar

const ChannelsContainer = styled.div`
overflow-y: scroll;
flex: 1;
`

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
flex: 0.3;
color: white;
border-top: 1px solid #cccccc;
max-width: 260px;
margin-top: 46px;
overflow-y: scroll;
min-width: 150px;
overflow: scroll;
display: flex;
flex-direction: column;
>  hr {
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #cccccc
}
`
const SidebarHeader = styled.div`
display: flex;
border-bottom: 1px solid #cccccc;
padding: 13px;
>  .MuiSvgIcon-root {
    padding: 8px;
    color: #cccccc;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
}
`

const SidebarInfo = styled.div`
flex: 1;
> h2{
   font-size: 15px;
   font-weight: 900;
   margin-bottom: 5px;
}
> h3{
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 400;
}
> h3 > .MuiSvgIcon-root{
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
}
`
