import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import SinglePageExample from './single-page-example'
import AxiosComponent from './axios-example'
import AxiosGet from './axios/axios-get';
import AxiosPost from './axios/axios-post';
import AxiosDelete from './axios/axios-delete';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const RouteComponent = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/single' component={SinglePageExample}/>
      <Route path='/axios' component={AxiosComponent}/>
      <Route exact path='/axiosget' component={AxiosGet}/>
      <Route exact path='/axiospost' component={AxiosPost}/>
      <Route exact path='/axiosdelete' component={AxiosDelete}/>
      <Route exact path='/axiosTest' component={AxiosComponent}/>
    </Switch>
  </main>
)

export default RouteComponent
