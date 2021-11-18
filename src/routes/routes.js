import React from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom'
import First from '../pages/First';

export default function Routes(){
  return(
    <div>
      <Router>
      <Switch>
      <Route  path='/' element={<First/>}>
        

      </Route>
      
      </Switch>
    </Router>
    </div>
  )
}