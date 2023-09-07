import styled from 'styled-components'

export const SearchFieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 440px;
  height: 42px;
  background: #EA0142;
  border-radius: 30px;
  input {
    font-size: 0.8em;
    outline: none;
    box-sizing: border-box;
    padding: 8px 24px;
    width:70%;
    background: transparent;
    border: none;
    &::placeholder {
      color: white;
    }
  }
  button {
    width: 30%;
    border: none;
    border-radius: 30px;
    background: #FBE202;
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: center;
  }

  @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    display: none;
}
`