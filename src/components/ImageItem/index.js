import {Component} from 'react'

import './index.css'

class ImageItem extends Component {
  render() {
    const {images, changeImage} = this.props
    const {thumbnailUrl, id} = images
    const onThumbClick = () => {
      changeImage(id)
    }
    return (
      <div className="list-of-images">
        <li className="list-image-item">
          <button
            type="button"
            className="image-buttons"
            onClick={onThumbClick}
          >
            <img src={thumbnailUrl} alt="thumbnail" className="thumb-image" />
          </button>
        </li>
      </div>
    )
  }
}

export default ImageItem
