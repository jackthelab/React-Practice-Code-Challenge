import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => props.clickAction()}>
            More sushi!
          </button>
}

export default MoreButton