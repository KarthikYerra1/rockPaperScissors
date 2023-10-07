import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  text-align: center;
  width: 50%;
`

export const ImageItemButton = styled.button`
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border: none;
  text-align: center;
`

export const ButtonImage = styled.img`
  height: 100px;
  @media screen and (min-width: 768px) {
    height: 150px;
  }
`
