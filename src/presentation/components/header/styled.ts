import { Row } from 'react-flexbox-grid'
import styled from 'styled-components'


export const StyledRow = styled(Row)`
  background: #FF0147;
`

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 85px;
` 

export const UserMenuWrapper = styled.div`
box-sizing: border-box;
  width: 25%;
  height: 35px;
  display: flex;
  justify-content: space-between;
  p, strong, span {
    margin: 0; 
    padding: 0;
    color: white;
    font-size: 0.8em;
  }
`

export const UserInfo = styled.div`
  display: flex;
  text-align: left;
  svg {
    margin-right: 8px;
  }
`

export const UserButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
  color: white;
`