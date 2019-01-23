import React, { Component } from 'react'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import Home from './Home'
import Players from './Players'
import Teams from './Teams'
import Navbar from './Navbar'


class App extends Component {
  render() {
    return (
     <Router>
       <div>
       <Navbar/>
       <Switch>
       <Route exact path='/' component = {Home}/>
       <Route exact path='/players' component = {Players}/>
       <Route exact path='/teams' component = {Teams}/>
       <Route render={() => ('404  page not found')}/>
       </Switch>
       </div>
       
     </Router>
    )
  }
}

export default App