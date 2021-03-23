import React, { Fragment } from 'react'

const Sushi = (props) => {

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.eatAction(props.item)}>
        { 
          props.eatenSushi.includes(props.item) ? null : <img src={ props.item.img_url } width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        { props.item.name } - ${ props.item.price }
      </h4>
    </div>
  )
}

export default Sushi