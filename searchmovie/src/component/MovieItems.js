import React, { Component } from 'react'

const imageUrl = 'https://image.tmdb.org/t/p/w342'

class MovieItems extends Component {
  constructor() {
    super()
    this.state = {
      favorite: false
    }
  }

  display = () => {
    if (!this.state.favorite) {
      return <span className="glyphicon glyphicon-heart-empty" aria-hidden="true"
        onClick={() => this.setState({ favorite: !this.state.favorite })}></span>
    } else {
      return <span className="glyphicon glyphicon-heart"
        aria-hidden="true"
        onClick={() => this.setState({ favorite: !this.state.favorite })}></span>
    }

  }

  render() {
    console.log('chk fav', this.state.favorite)
    const { movies } = this.props
    return (
      <div className="col-sm-3 col-md-3">
        <div className="thumbnail">
          <img src={imageUrl + movies.poster_path} alt="..." />
          <div className="caption">
            <h3>{movies.original_title}</h3>
            <p>{movies.overview}</p>
            <p><strong>Release Data -</strong>{' '}{movies.release_date}</p>
            <p><strong>Review -</strong>{' '}<span className='badge badge-default'>
              <span className="glyphicon glyphicon-star" aria-hidden="true"></span>{' '}
              {movies.vote_average}</span></p>
            <p>{this.display()}</p>
          </div>

        </div>
      </div>


    )
  }
}

export default MovieItems