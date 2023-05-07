import React from 'react'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios' 

const Home = () => {
  var[users,setData]=useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        setData(response.data)
        console.log(response.data)
    }).catch((err) => console.log(err))
},[])
  return (
    <div style={{
      backgroundColor: "transparent",
      backdropFilter: "blur(25px)",
      borderRadius: "60px 60px 60px 60px",
      boxShadow: "20px",
      
      padding:"10px",

      margin: "100px ",
      
      
  }}>
    <Typography style={{fontFamily:"cursive", fontSize:"60px", color:"white", textDecoration:"underline"}}>Home</Typography>

     <hr />
     <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            
          <TableCell style={{color:"white" , fontFamily:"monospace" ,fontSize:"30px"}}>
            Id
            </TableCell>
            <TableCell style={{color:"white" , fontFamily:"monospace" ,fontSize:"30px"}}>
           Name
            </TableCell>
            
            <TableCell style={{color:"white" , fontFamily:"monospace" ,fontSize:"30px"}}>
            Email
           </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {users.map((value,id)=>{return(<TableRow key={id}>
                      <TableCell style={{color:"moccasin", fontFamily:"cursive" ,fontSize:"30px"}}>{ value.id}</TableCell>
                      <TableCell style={{color:"moccasin" , fontFamily:"cursive" ,fontSize:"30px"}}>{ value.name}</TableCell>
                      <TableCell style={{color:"moccasin" , fontFamily:"cursive" ,fontSize:"30px"}}>{value.email}</TableCell>
                      
                      
                  </TableRow>);})}

          
          <TableRow>
          </TableRow>
          </TableBody>
      </Table>
     </TableContainer>
  </div>
  )
}

export default Home