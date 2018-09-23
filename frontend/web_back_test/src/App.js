import React from 'react'
import axios from 'axios'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      noteCount: 0
    }
  }

  componentDidMount() {
    axios.get(BACKEND_URL).then(result => {
      this.setState({ noteCount: result.data.length })
    })
  }

  onClick = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return (
      <div className="container">
        <p>hello webpack {this.state.counter} clicks</p>
        <button onClick={this.onClick}>click</button>
        <p>{this.state.noteCount} notes in server</p>
      </div>
    )
  }
}

export default App