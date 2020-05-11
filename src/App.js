import React from 'react';
import './App.css';
import Login from './components/publicRoutes/login';
import PublicRoutes from './components/publicRoutes/publicRoute'
import PrivateRoutes from './components/privateRoutes/privateRoutes'
import {BrowserRouter,Switch,Redirect} from 'react-router-dom' 
import DefaultPage from './components/privateRoutes/defaultPage'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


function App() {
  const transitions = {
    FADE: 'fade',
    SCALE: 'scale'
  }
  const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 3000,
    transition: transitions.SCALE
    
  }
  return (
    <AlertProvider template={AlertTemplate} {...options}>
    <BrowserRouter>
    <Switch>
      <PublicRoutes component={Login} path='/login' />  
      <PrivateRoutes component={DefaultPage} path='/polls' />
      <Redirect from='/' to='login'/>
    </Switch>
    </BrowserRouter>
    </AlertProvider>
  
  );
}

export default App;