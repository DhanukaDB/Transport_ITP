import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRouter({isAuth: isAuthent, component: Component, ...rest}){
    return(
    <Route {...rest} render={(props)=>{
    if(isAuthent){
        return <Component/>
    }else{
        return (<Redirect to={{pathname: "/", state: {from: props.location}}}/>
        );
    }
    }}
    />
    );
}

export default ProtectedRouter;