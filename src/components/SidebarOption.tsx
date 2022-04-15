import type { SvgIconComponent } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

type SidebarOptionProps = {
  Icon: SvgIconComponent|null,
  title: string,
}
function SidebarOption({ Icon, title }: SidebarOptionProps) {
  return (
    <SidebarContainer>
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
