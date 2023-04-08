// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const primeImg = 'https://assets.ccbp.in/frontend/react-js/prime-video-img.png'
const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(
    movies => movies.categoryId === 'ACTION',
  )

  const comedyMovies = moviesList.filter(
    movies => movies.categoryId === 'COMEDY',
  )

  return (
    <div className="prime-container">
      <img src={primeImg} alt="prime video" className="prime-img" />
      <div className="movies-container">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMovies} />
        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMovies} />
      </div>
    </div>
  )
}
export default PrimeVideo
