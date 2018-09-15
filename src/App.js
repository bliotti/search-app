import React, { Component } from 'react'
import { Grid, Jumbotron } from 'react-bootstrap'
import SearchForm from './components/search-form'
import Results from './components/results'

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>Search App</h1>
            <p>This is a Search App</p>
            <SearchForm />
          </Grid>
        </Jumbotron>
        <Results />
      </div>
    )
  }
}

export default App
