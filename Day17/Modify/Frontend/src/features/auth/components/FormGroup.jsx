import React from 'react'

const FormGroup = ({label,placeholder,value,onchange}) => {
  return (
     <div className="form-group">
        <label htmlFor={label}>{label}</label>
        <input 
        value={value}
        onChange={onchange}
        type="text" id={label} name={label} placeholder={placeholder}/>
     </div>
  )
}

export default FormGroup
