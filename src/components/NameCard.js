import React from 'react'

const NameCard = (props) => {
  const { name, number, isHuman, tags } = props
  return (
    <div className="alert alert-success">
      <h4 className="alert-heading">{name}</h4>
      <ul>
        <li>電話：{number}</li>
        <li>{ isHuman ? '地球人' : '火星人' }</li>
        <hr/>
        <p>
          {tags.map((tag, index) =>(
            <span className="badge badge-pill badge-primary" key={index}>{tag}</span>
          ))}
        </p>
      </ul>
    </div>
  )
}

export default NameCard
