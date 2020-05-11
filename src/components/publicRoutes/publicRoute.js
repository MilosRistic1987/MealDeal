import React from 'react';
import { Route } from 'react-router-dom';

 const PublicRoutes = ({component: Component, ...rest}) => {
     console.log(Component)
    return (
        <Route {...rest} render={props => (
             <Component {...props} />
        )} />
    );
};

export default PublicRoutes