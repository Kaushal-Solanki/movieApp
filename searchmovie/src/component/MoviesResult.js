import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieItems from './MovieItems'

class MoviesResult extends Component {
  render() {
    console.log('chk props', this.props.movies)

    const { movies } = this.props
    return (
      <div>
        {movies.map((items) => {
          return <MovieItems movies={items} />
        })}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    movies: state
  }
}
export default connect(mapStateToProps, null)(MoviesResult)