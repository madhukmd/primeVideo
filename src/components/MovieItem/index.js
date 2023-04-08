// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = props => {
  const {movieItems} = props
  const {thumbnailUrl, videoUrl} = movieItems
  console.log(thumbnailUrl)

  return (
    <div>
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
        }
        className="popup-container"
      >
        {close => (
          <div className="movie-container">
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose className="cl-button" />
            </button>
            <div className="video">
              <ReactPlayer url={videoUrl} controls width="90%" />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
