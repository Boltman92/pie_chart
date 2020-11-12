import React, { useState } from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PieChart from './PieChart';
import Start from './start_page'

function Home() {
  
  
  const [result, setResult] = useState({})  
  const saveInputData = (value, value_number) => {
    setResult({...result, [value]: value_number})
  }   


  return (
      <Router>
      <div>
      <Switch>
      <Route path="/" exact component={() => <Start saveInputData={saveInputData} />} />
      <Route path="/result" exact component={() => <PieChart obj={result} />} />  
      </Switch>
      </div>
       </Router>
  )
}

export default Home;
