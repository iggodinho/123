import React from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom'
import First from '../pages/First';
import Login from '../pages/Login';
import Questions from '../pages/Questions';

export default function Routes(){ 
  const isLogged=localStorage.getItem('isLoggedIn')
  const LoggedRoutes=()=>{
    return(
      <Switch>
      <Route  path='/' element={<First/>}/>
      <Route path='/questoes' element={<Questions/>}/>
      </Switch>
    )
  }
  const NotLogged=()=>{
    return(
      <Switch>
      <Route path='*' element={<Login/>}/>
      </Switch>
    )
    
  }




  return(
    <div>
      <Router>
        {isLogged?<LoggedRoutes/>:<NotLogged/>}
      </Router>
    </div>
  )
}