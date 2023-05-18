// Write your code here
import MoviesSlider from '../MoviesSlider'
import {
  AppContainer,
  PrimeImage,
  MoviesContainer,
  MoviesHeading,
} from './styledComponents'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )

  const comedyMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  return (
    <>
      <AppContainer>
        <PrimeImage
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
        />
        <MoviesContainer>
          <MoviesHeading>Action Movies</MoviesHeading>
          <MoviesSlider moviesList={actionMoviesList} />
          <MoviesHeading>Comedy Movies</MoviesHeading>
          <MoviesSlider moviesList={comedyMoviesList} />
        </MoviesContainer>
      </AppContainer>
    </>
  )
}

export default PrimeVideo
