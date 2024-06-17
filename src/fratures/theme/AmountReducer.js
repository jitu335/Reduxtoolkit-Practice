//This is reducer--

import React from 'react'
import reducers from './reducers';

 const AmountReducer = (state=0, action) => {

if(action.type ==='deposit') {

    return state + action.paylod
 } 

 else if(action.type=== 'withdrow'){  

    return state - action.paylod 

 } 

 else{

    return state; 
 }

}

export default AmountReducer