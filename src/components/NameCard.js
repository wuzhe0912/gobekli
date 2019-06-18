import React from 'react'

class NameCard extends React.Component {
  render () {
    const { name, number, isHuman, tags } = this.props
    return (
      <div>
        <h4>{name}</h4>
      </div>
    )
  }
}

export default NameCard
