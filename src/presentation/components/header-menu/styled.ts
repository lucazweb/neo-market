import { Row } from 'react-flexbox-grid'
import styled from 'styled-components'

export const StyledMenuRow = styled(Row)`
  background-color: #FFE101;
  @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    display: none;
  }
`

export const StyledMenuList = styled.ul`
    display: flex;
    gap: 22px;
`

export const ItemList = styled.li`
  height: 45px;
  padding: 12px;
  box-sizing: border-box;
  list-style: none;
  display: flex;
  align-items: center;
`