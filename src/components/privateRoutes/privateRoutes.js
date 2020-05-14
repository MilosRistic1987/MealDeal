import React from 'react';
import { Route,Redirect } from 'react-router-dom';



const PrivateRoutes=({component:Component,...rest})=>{
    const isLogin =()=>{
        return localStorage.getItem('myUserInLocalStorage')?true:false
    }
  
    
    return(
        <Route {...rest} render={props=>(   
            isLogin()?
            <Component {...rest} />:
            <Redirect to="/login"/>
    
           
        )} />
    )
}



export default PrivateRoutes