import {Component} from 'react'

import {
  Container,
  UnorderedList,
  ResultsContainer,
  Heading,
  Image,
  RulesBtnContainer,
  PlayAgainBtn,
} from './styledComponents'

import ScoreView from '../ScoreView'

import ImageItem from '../ImageItem'

import RulesBtn from '../RulesBtn'

class RockPaperScissors extends Component {
  state = {
    score: 0,
    showResult: false,
    myChoice: '',
    systemChoice: '',
    gameMessage: '',
  }

  playAgainGame = () => {
    this.setState({
      showResult: false,
    })
  }

  showResults = () => {
    const {myChoice, systemChoice, gameMessage} = this.state

    return (
      <ResultsContainer main>
        <ResultsContainer sub>
          <ResultsContainer main>
            <Heading>YOU</Heading>
            <Image src={myChoice} alt="your choice" />
          </ResultsContainer>
          <ResultsContainer main>
            <Heading>OPPONENT</Heading>
            <Image src={systemChoice} alt="opponent choice" />
          </ResultsContainer>
        </ResultsContainer>
        <Heading as="p" gm>
          {gameMessage}
        </Heading>
        <PlayAgainBtn type="button" onClick={this.playAgainGame}>
          Play Again
        </PlayAgainBtn>
      </ResultsContainer>
    )
  }

  clickedImage = id => {
    const {choicesList} = this.props
    const myChoice = choicesList.find(each => each.id === id)
    const systemChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    let message = ''
    if (myChoice.id === 'ROCK' && systemChoice.id === 'PAPER') {
      message = 'YOU LOSE'
    } else if (myChoice.id === 'ROCK' && systemChoice.id === 'SCISSORS') {
      message = 'YOU WON'
    } else if (myChoice.id === 'PAPER' && systemChoice.id === 'SCISSORS') {
      message = 'YOU LOSE'
    } else if (myChoice.id === 'PAPER' && systemChoice.id === 'ROCK') {
      message = 'YOU WON'
    } else if (myChoice.id === 'SCISSORS' && systemChoice.id === 'ROCK') {
      message = 'YOU LOSE'
    } else if (myChoice.id === 'SCISSORS' && systemChoice.id === 'PAPER') {
      message = 'YOU WON'
    } else {
      message = 'IT IS DRAW'
    }

    this.setState({
      myChoice: myChoice.imageUrl,
      systemChoice: systemChoice.imageUrl,
      gameMessage: message,
      showResult: true,
    })

    if (message === 'YOU WON') {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else if (message === 'YOU LOSE') {
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    }
  }

  renderGame = choices => (
    <Container>
      <UnorderedList>
        {choices.map(each => (
          <ImageItem
            key={each.id}
            details={each}
            clickedImage={this.clickedImage}
          />
        ))}
      </UnorderedList>
    </Container>
  )

  render() {
    const {choicesList} = this.props
    const {score, showResult} = this.state
    return (
      <Container main>
        <ScoreView score={score} />
        {showResult ? this.showResults() : this.renderGame(choicesList)}
        <RulesBtnContainer>
          <RulesBtn />
        </RulesBtnContainer>
      </Container>
    )
  }
}

export default RockPaperScissors
