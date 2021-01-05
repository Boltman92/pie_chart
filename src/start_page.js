import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Legend from './legend'


const Start = (props) => {

 const mockObj = {
    beer: {number:10,
           color: "red"
    },
    vodka: {number:20,
           color: "green"
    },
    martini: {number:30,
           color: "black"
    },
    milk: {number:40,
           color: "blue"
    },
    jin: {number:50,
           color: "yellow"
    },
 }
 const [value, setValue] = useState('')
  const [valueNumber, setValue_num] = useState('')
  
  const onChange = (e) => {
    const { value } = e.target
    setValue(value)
  }
  const onChange_num = (e) => {
    setValue_num(+e.target.value)
  }

 const onClick = () => {
   props.saveInputData(value, valueNumber)
   setValue('')
   setValue_num('')
 }
 console.log(props)
  return ( 
      <div className="start">
      <div className="input">
          <input value={value} onChange={onChange} type="text" placeholder="type item" />
          <input value={valueNumber} onChange={onChange_num} type="number" min="1" placeholder="type value" />
          <button
            type="button"
            onClick={onClick} >
            add things
          </button>
          <Link to="/result"> watch results </Link>
          </div>
          <Legend obj={mockObj}/> 
      </div>
  )
}

Start.propTypes = {}

export default React.memo(Start)
