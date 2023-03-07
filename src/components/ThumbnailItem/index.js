import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, displayImage, isActive} = props
  const {id} = imageDetails

  const onClickImage = () => {
    displayImage(id)
  }

  const activeClassName = isActive ? 'image-blur' : ''

  return (
    <li className="list-item">
      <button type="button" onClick={onClickImage}>
        <img
          className={`image ${activeClassName}`}
          src={imageDetails.thumbnailUrl}
          alt={imageDetails.thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
