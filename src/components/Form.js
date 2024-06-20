import React from 'react'

const Form = (handleEmail,handleHex,handleName,handleJoin) => {
    const emailAdd = (e)=>{
        handleEmail(e.target.value);
    }
    const nameAdd = (e)=>{
        handleName(e.target.value);
    }
    const hexAdd = (e)=>{
        handleHex(e.target.value);
    }
  return (
    <div className="form-container">
        <input type="text" className='input-element' placeholder="Email" onChange={()=>emailAdd} />
        <input type="text" className='input-element' placeholder="Name" onChange={()=>nameAdd}/>
        <input type="text" className='input-element' placeholder="16 digit hex code" onChange={()=>hexAdd}/>
    </div>
  )
}

export default Form