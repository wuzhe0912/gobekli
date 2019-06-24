import React from 'react'

class LikesButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      likes: 0
    }
    // 在 javascript 的 class 中，this 是不會自動綁定的，需要手動綁定
    this.increaseLikes = this.increaseLikes.bind(this)
  }
  increaseLikes () {
    // state 數據庫不允許直接操作，需要透過 setState 方法
    this.setState((node) => ({
      likes: node.likes += 1
    }))
  }
  render () {
    return (
      <div className="likes-btn">
        <button
          type="button"
          className="btn btn-outline-primary btn-bg"
          onClick={this.increaseLikes}
        >
          {this.state.likes} 👍
        </button>
      </div>
    )
  }
}

export default LikesButton
