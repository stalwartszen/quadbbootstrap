import React from 'react'

const Separator = ({color}) => {
  return (
    <div>
      <div style={{border:`1px solid ${color}` , width:"100%",margin:10}} />
    </div>
  )
}

export default Separator