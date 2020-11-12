import React, { useState } from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from './App';
import Start from './start_page'

function Home() {
  
  
  const [result, setResult] = useState({})  
  const saveInputData = (value, value_number) => {
    setResult({...result, [value]: value_number})
  }   

 const resultMock = {a: 10,
                     b: 10,
                     c: 10,
                     d: 10}

  return (
      <Router>
      <div>
      <Switch>
      <Route path="/" exact component={() => <Start saveInputData={saveInputData} />} />
      <Route path="/result" exact component={() => <App obj={result} />} />  
      </Switch>
      </div>
       </Router>
  )
}

export default Home;
