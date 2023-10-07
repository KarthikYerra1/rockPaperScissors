import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import {
  RulesContainer,
  RulesButton,
  CloseBtnContainer,
  CloseBtn,
  RulesImg,
} from './styledComponents'

const RulesBtn = () => (
  <Popup trigger={<RulesButton>Rules</RulesButton>} modal nested>
    {close => (
      <RulesContainer>
        <CloseBtnContainer>
          <CloseBtn type="button" onClick={close}>
            <RiCloseLine />
          </CloseBtn>
        </CloseBtnContainer>
        <RulesImg
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
        />
      </RulesContainer>
    )}
  </Popup>
)

export default RulesBtn
