import styled from 'styled-components'

export const RulesButton = styled.button`
  height: 40px;
  padding: 10px 20px 10px 20px;
  font-family: 'Bree Serif';
  color: #223a5f;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
`

export const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #fff;
`
export const CloseBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`

export const CloseBtn = styled.button`
  height: 30px;
  width: 30px;
  background-color: lightgray;
  border: none;
  color: #223a5f;
  cursor: pointer;
  outline: none;
`
export const RulesImg = styled.img`
  height: 200px;
  padding: 10px 40px 30px 40px;
  @media screen and (min-width: 768px) {
    height: 400px;
  }
`
