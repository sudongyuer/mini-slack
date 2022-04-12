import { Create, FiberManualRecord } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>PAPA FAM HQ</h2>
          <h3>
          <FiberManualRecord/>
          Sudongyuer
          </h3>
        </SidebarInfo>
        <Create/>
      </SidebarHeader>
    </SidebarContainer>
  )
}

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
flex: 0.3;
color: white;
border-top: 1px solid #49274b;
max-width: 260px;
margin-top: 46px;
`
const SidebarHeader = styled.div`
display: flex;
border-bottom: 1px solid #49274b;
padding: 13px;
>  .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
}
`;

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
`;
