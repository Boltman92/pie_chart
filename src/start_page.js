import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css';


const Start = (props) => {

 const [value, setValue] = useState('')
  const [value_number, setValue_num] = useState('')
  
  const onChange = (e) => {
    const { value } = e.target
    setValue(value)
  }
  const onChange_num = (e) => {
    setValue_num(+e.target.value)
  }

 const onClick = () => {
   props.saveInputData(value, value_number)
   setValue('')
   setValue_num('')
 }

  return ( 
      <div className="start">
      <div className="input">
          <input value={value} onChange={onChange} type="text" placeholder="type item" />
          <input value={value_number} onChange={onChange_num} type="number" min="1" placeholder="type value" />
          <button
            type="button"
            onClick={onClick} >
            add things
          </button>
          <Link to="/result"> watch results </Link>
          </div>
      </div>
  )
}

Start.propTypes = {}

export default React.memo(Start)
