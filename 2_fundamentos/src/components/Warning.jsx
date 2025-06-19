import React from 'react'

function Warning({ warning }) {

    if(!warning){
        return null
    }

  return (
    <div>Warning</div>
  )
}

export default Warning