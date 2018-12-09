import React, { Component } from 'react'
import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { API_KEY } from '../Secrets'
import movie from '../actions'
class Search extends Component {
  constructor() {
    super()
    this.state = {
      query: ''
    }
  }

  search = (e) => {
    e.preventDefault();
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=2&query=${this.state.query}`
    // console.log(url)
    fetch(url, {
      method: "GET"
    })
      .then(res => res.json())
      .then(jsonObj => { this.props.movie(jsonObj.results) })
  }

  onChange = (e) => {
    this.setState({
      query: e.target.value
    })
  }
  render() {
    return (
      <div>
        <Form inline className='text-center'>
          <FormGroup>
            <ControlLabel>Search</ControlLabel>
            {' '}
            <FormControl type="text" placeholder="wonder movie" onChange={(e) => this.onChange(e)} />
            {' '}
            <Button bsStyle='success' onClick={(e) => this.search(e)}>Submit</Button>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default connect(null, { movie })(Search)