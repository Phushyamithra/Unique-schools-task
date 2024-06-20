import React from 'react';

const FormDisplay = ({ item }) => {
  return (
    <div className='table-container'>
      <table>
      <div className="table-element">

        <td>#{item.id}</td>
        <td>{item.name}</td>
        <td>{item.hex}</td>
        <td>{item.email}</td>
      </div>
      </table>
    </div>
  )
}

export default FormDisplay;
