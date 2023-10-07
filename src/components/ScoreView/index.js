import {ScoreCardContainer, GameTitle, Score} from './styledComponents'

const ScoreView = props => {
  const {score} = props

  return (
    <ScoreCardContainer
      direction
      justify="space-between"
      align
      width
      bgColor="transparent"
      border
      color=""
      padding="10px"
    >
      <ScoreCardContainer bgColor="tranparent" color="#fff">
        <GameTitle>
          ROCK <br />
          PAPER <br /> SCISSORS
        </GameTitle>
      </ScoreCardContainer>
      <ScoreCardContainer
        justify="center"
        align
        bgColor="#fff"
        padding="25px"
        color="#223a5f"
      >
        <Score fontSize="20px" lgFontSize="32px">
          Score
        </Score>
        <Score fontSize="30px" lgFontSize="40px">
          {score}
        </Score>
      </ScoreCardContainer>
    </ScoreCardContainer>
  )
}

export default ScoreView
