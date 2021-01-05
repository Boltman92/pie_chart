import React, { useState } from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PieChart from './PieChart';
import Start from './start_page'

function Home() {
  
   function generateColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16)
}

  const [result, setResult] = useState({})  
  const saveInputData = (value, valueNumber) => {
    setResult({...result, [value]: {number: valueNumber, color: generateColor()}})
  }   

console.log(result)
console.log(Object.values(result))
 console.log(Object.values(result).sort((a,b) => b.number - a.number))

  return (
      <Router>
      <div>
      <Switch>
      <Route path="/" exact component={() => <Start saveInputData={saveInputData} obj={result}/>} />
      <Route path="/result" exact component={() => <PieChart obj={result} />} />  
      </Switch>
      </div>
       </Router>
  )
}

export default Home;
