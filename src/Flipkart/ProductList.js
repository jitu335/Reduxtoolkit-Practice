import React, { useEffect, useState } from 'react'
import axios from "axios";
import Table from 'react-bootstrap/Table'; 
import Button from 'react-bootstrap/Button';
import MenuProductList from './MenuProductList';

const ProductList = () => {

    // const [apiData, setApidata] = useState([]);

    let [data, setdata]=useState([]) 

   
    const [search, setsearch]=useState('') 
    console.warn(search) 
   
     useEffect (()=> {
   
       fetch('https://dummyjson.com/products').then((result)=> {
   
     result.json().then((resp)=> { 
       setdata(resp) 
   
     } )
     } )
   
     },[])



  return (
    <div>
         <h4>Flipkart/ProductList.js</h4> 
   
  
<input type='text' onChange={(e)=>setsearch(e.target.value)}></input> 
<br></br><br></br>
<Button variant="success">Search</Button>
   
 <Table striped bordered hover variant="dark"> 
    <thead>
      <tr>

       <th>id</th> 
       <th>title</th>
       <th>description</th>
       <th>price</th>
       <th>discountPercentage</th>
       <th>rating</th>
       <th>brand</th> 
       <th>category</th> 
      
       <th>images</th>  
      </tr>
      </thead>
      
   <tbody>  
     { MenuProductList && MenuProductList.length>0 
        ? MenuProductList.filter((item)=> { 
         return search.toLowerCase() === ''? item: item.title.toLowerCase().includes(search) 

        }).map((item)=> {

         return (
          <tr>
              
           <td>{item.id}</td>
           <td>{item.title}</td>
           <td>{item.description}</td>
           <td>{item.price}</td> 
           <td>{item.discountPercentage}</td> 
           <td>{item.rating}</td> 
           <td>{item.brand}</td> 
           <td>{item.category}</td> 
           <td><img style={{width:150, height:100}} src={item.images} /></td>  
          </tr> 
           )

        } ): "data is here"
        }
       </tbody> 
    </Table> 
    
    
    </div>
  )
}

export default ProductList