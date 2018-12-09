import React, { Component } from 'react';
import MoviesResult from './component/MoviesResult'
import Search from './component/Search'
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="container">
            <div className="jumbotron text-center">
              <h1>Movie App</h1>
            </div>

          </div>
        </div>
        <div className='row'>
          <Search />
        </div>
        <div className="row">
          <MoviesResult />
        </div>


      </div>
    );
  }
}

export default App;
