import React from 'react'

const FormDisplay = ({id,item}) => {

  return (
    <div className='table-container'>
        <div className="table-element">
            <span>{id}</span>
            <span>{item.name}</span>
            <span>{item.hex}</span>
            <span>{item.email}</span>
            
        </div>
    </div>
  )
}

export default FormDisplay