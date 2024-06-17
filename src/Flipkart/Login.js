import React, { Fragment, useState } from 'react'


import react from 'react'

const Login = () => {

    const[userErr, setuserErr]=useState() 
    const[passErr, setpassErr]=useState() 
    
  
   function loginHandler (e) { 
  
  }  
      //====================================userId=====================================
  function userHandler (e) {
  
  let item= e.target.value
  
  if (item.length<3) { 
    setuserErr(true)  
  } 
  else {
    setuserErr(false) 
  }
  
   }
  
  //====================================password======================================
   function passwordHandler (e) {
    let item= e.target.value
  
    if (item.length<6) { 
      setpassErr(true)  
    } 
    else {
      setpassErr(false) 
    }
  
   }

  return (
    <div>
          <h4>Flipkart/Login.js</h4>
     <form onClick={loginHandler}> 
        {/* <!-- Email input --> */}
        <div class="form-outline mb-4">
          <input placeholder="Email address" onChange={userHandler} />

          {
            userErr? <p style={{color: 'red'}}>User must be longer than 3 characters</p>: '' 
            
          }
         </div>


        {/* <!-- Password input --> */}
        <div class="form-outline mb-4">
          <input placeholder="Password" onChange={passwordHandler} /> 
          
          {
            passErr? <p style={{color: 'green'}}>Password must be longer than 6 characters</p>: '' 
          }
        </div>


        {/* <!-- 2 column grid layout for inline styling --> */}
      
          <div class="row mb-4" >
            {/* <!-- Checkbox --> */}
            <div>
              <input type="checkbox" /> 
              <label> Remember me </label> 
            </div>
          </div>

          <div class="col">
            {/* <!-- Simple link --> */} 
            <a href="#!">Forgot password?</a> 
          </div>
       

        {/* <!-- Submit button --> */} 
        <button>Sign in</button>

        {/* <!-- Register buttons --> */}
        <div>
           <p>{" "} New user? <a href="#!">Register</a></p> 
        </div>
      </form>
    
    
    </div>
  )
}

export default Login