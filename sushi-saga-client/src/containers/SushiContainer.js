import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushiData.map(i => {
          return <Sushi item={i} eatAction={props.eatAction} eatenSushi={props.eatenSushi} />
        })}
        <MoreButton clickAction={props.moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer