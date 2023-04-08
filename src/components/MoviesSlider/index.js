import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props
  console.log(moviesList)
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {moviesList.map(eachItem => (
          <MovieItem key={eachItem.id} movieItems={eachItem} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
