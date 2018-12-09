import React, { Component } from 'react'

const imageUrl = 'https://image.tmdb.org/t/p/w342'

class MovieItems extends Component {
  render() {
    const { movies } = this.props
    return (
      <div className="col-sm-3 col-md-3">
        <div className="thumbnail">
          <img src={imageUrl + movies.poster_path} alt="..." />
          <div className="caption">
            <h3>{movies.original_title}</h3>
            <p>{movies.overview}</p>
            <p><strong>Release Data -</strong>{' '}{movies.release_date}</p>
            <p><strong>Review -</strong>{' '}{movies.vote_average}</p>
            <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
          </div>

        </div>
      </div>


    )
  }
}

export default MovieItems