import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: ${props => (props.main ? '100vh' : '')};
  background-color: ${props => (props.main ? '#223a5f' : '')};
  padding: 30px;
  @media screen and (min-width: 768px) {
    padding: 50px;
  }
`
export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.main ? 'column' : 'row')};
  justify-content: ${props => (props.sub ? 'space-between' : 'center')};
  align-items: center;
  width: 100%;
  
  padding: 20px;
  }
`

export const Heading = styled.h1`
  color: #fff;
  font-family: 'Roboto';
  font-size: 18px;
  margin: ${props => (props.gm ? '0px' : '')};
  padding: ${props => (props.gm ? '0px' : '')};
  font-weight: ${props => (props.gm ? 'bold' : '')};
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const Image = styled.img`
  height: 100px;
  @media screen and (min-width: 768px) {
    height: 150px;
  }
`

export const UnorderedList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 0px;
  padding: 0;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    width: 65%;
  }
`

export const PlayAgainBtn = styled.button`
  height: 40px;
  padding: 10px 20px 10px 20px;
  background-color: #fff;
  font-family: 'Bree Serif';
  color: #223a5f;
  border-style: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  margin-top: 15px;
`
export const RulesBtnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
