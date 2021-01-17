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
 //const filteredByKey = Object.fromEntries(Object.entries(result).filter(([key, val]) => key !== Object.keys(inputObj)[index]))
 const deleteEl = (inputObj, index, value) => {  
   //const searchWord = Object.keys(inputObj)[index];
  //  const newState = Object.fromEntries(Object.entries(result).filter(([key, val]) => key !== searchWord));
  //  console.log('*************');
  //  console.log(inputObj, index);
  //  console.log(searchWord);
  //  console.log(newState);
  //  console.log('*************');
   const newState = { ...result };
   delete newState[value];
   return setResult(newState)
 }


  return (
      <Router>
      <div>
      <Switch>
      <Route path="/" exact component={() => <Start saveInputData={saveInputData} obj={result} deleteEl={deleteEl}/>} />
      <Route path="/result" exact component={() => <PieChart obj={result} />} />  
      </Switch>
      </div>
       </Router>
  )
}

export default Home;
