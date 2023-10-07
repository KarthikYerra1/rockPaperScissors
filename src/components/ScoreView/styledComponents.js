import styled from 'styled-components'

export const ScoreCardContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction ? 'row' : 'column')};
  justify-content: ${props => props.justify};
  align-items: ${props => (props.align ? 'center' : '')};
  width: ${props => (props.width ? '100%' : '')};
  background-color: ${props => props.bgColor};
  background-size: cover;
  font-family: 'Roboto';
  border: ${props => (props.border ? 'solid 2px #fff' : '')};
  border-radius: 8px;
  color: ${props => props.color};
  padding: ${props => props.padding};
  @media screen and (min-width: 768px) {
    width: ${props => (props.width ? '65%' : '')};
  }
`
export const GameTitle = styled.h1`
  font-family: 'Bree Serif';
  font-size: 20px;
  margin: 5px;
  padding: 0;
  margin-left: 15px;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`

export const Score = styled.p`
  padding: 0px;
  margin: 0px;
  font-size: ${props => props.fontSize};
  margin-top: 5px;
  margin-top: 4px;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: ${props => props.lgFontSize};
  }
`
