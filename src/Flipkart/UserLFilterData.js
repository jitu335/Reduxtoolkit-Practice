import React, { useEffect, useState } from 'react'
import axios from 'axios';

const UserLFilterData = () => {

    const [users, setusers] = useState([]);
    const [singleUser, setsingleUser]=useState([]);


    useEffect(function() { 
        axios
        .get('https://jsonplaceholder.typicode.com/users')  
        .then(response=> setusers(response.data))  
        .then(error=> console.warn(error)) 
        
        }, [])  


        function onddlchange (e) {  
            alert(e.target.value)  
           
            axios 
             .get('https://jsonplaceholder.typicode.com/users/' + e.target.value )  
             .then(response=> setsingleUser(response.data))   
             .then(error=> console.warn(error)) 
           
            }


  return (
    <div>
          <h4>Flipkart/UserLFilterData.js</h4>
    <h5 style={{color: 'red'}}>UserLFilterData</h5> 

    <select className='form-control col-md-6' onChange={onddlchange}>     
    <option value='0'>--Select--</option> 
 
    {
      users.map((opts,i)=><option key={opts.id} value={opts.id}>{opts.name}</option>) 
   }
     </select>  
     <br></br>
    
     <table class="table">
     <thead class="thead-dark">

      <tr>
      <th>id</th>
        <th>name</th> 
        <th>username</th> 
        <th>email</th> 
      </tr>
     </thead>

        <tbody>

          {
            <tr>
              <td>{singleUser.id}</td> 
              <td>{singleUser.name}</td> 
              <td>{singleUser.username}</td> 
              <td>{singleUser.email}</td> 
            </tr>
          }
        </tbody>
     </table>
     
    </div>
  )
}

export default UserLFilterData