import styled from 'styled-components'

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  margin: 24px 0 0 0;
  span {
    color: #DC0E53;
  }
`

export const ProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 32px auto;
  flex-wrap: wrap;
`

export const Footer = styled.footer`
   padding: 24px;
`

export const FooterList = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  text-align: start;
  width: 100%;
  margin-top: 32px;
  justify-content: flex-start;
  strong {
    margin-bottom: 8px;
  }
  li {
    display: flex;
    margin-bottom: 8px;
    justify-content: flex-start;
    text-align: center;
  }
`

export const StyledNewsInput = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 1.8em;
  background: transparent;
  outline: none;
  &::placeholder {
    color: #ccc;
    padding: 12px;
  }
`

export const StyledNewsButton = styled.button`
  border: none;
  height: 40px;
  background: none;
  font-size: 1.4em;
`
