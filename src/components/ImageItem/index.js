import {ListItem, ImageItemButton, ButtonImage} from './styledComponents'

const ImageItem = props => {
  const {details, clickedImage} = props
  const {id, imageUrl} = details

  const onClickImage = () => {
    clickedImage(id)
  }

  const getDataTestId = () => {
    if (id === 'ROCK') {
      return 'rockButton'
    }
    if (id === 'PAPER') {
      return 'paperButton'
    }
    if (id === 'SCISSORS') {
      return 'scissorsButton'
    }
    return null
  }

  return (
    <ListItem>
      <ImageItemButton
        data-testid={getDataTestId()}
        type="button"
        onClick={onClickImage}
      >
        <ButtonImage src={imageUrl} alt={id} />
      </ImageItemButton>
    </ListItem>
  )
}

export default ImageItem
