import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  margin: 12px;
  border: 1px solid #ccc;
  border-radius: 10px;
  img {
    width: 75%;
    margin: 32px auto;

  }
`

export const ProductDescription = styled.div`
  text-align: center;
  font-size: 0.8em;
  margin-bottom: 12px;
`

export const RattingBox = styled.div``

export const ProductPrice = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
  gap: 8px;
  span {
    color: #666;
    text-decoration: line-through;
  }
`

export const DiscountBox = styled.div`
  display: flex;
  align-items: center;
  color:white;
  justify-content: center;
  background: #FF0145;
  height: 28px;
  font-weight: bold;
  font-size: 0.8rem;
  border-radius: 10px 10px 0 0;
`

export const ProductButton = styled.button`
  background: #FFD701;
  color: white;
  border: none;
  border-radius: 25px;
  margin-top: 18px;
  padding: 8px;
  width: 120px;
  cursor: pointer;
`