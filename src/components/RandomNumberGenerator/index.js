// Write your code here
import './index.css'

import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {
    randomNum: 0,
  }

  onClickRandomNum = () => {
    this.setState({randomNum: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {randomNum} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            onClick={this.onClickRandomNum}
            className="button"
            type="button"
          >
            Generate
          </button>
          <p className="random-num">{randomNum}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
