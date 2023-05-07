import { Typography  ,Button ,TextField} from '@mui/material'
import React from 'react'

const Employee_Form = () => {
  return (
    <div 
       style={{
      backgroundColor: "transparent",
      backdropFilter: "blur(25px)",
      borderRadius: "60px 0px 60px 0px",
      boxShadow: "50px",
      maxWidth: "300px",
      margin: "100px auto",
      padding: "0px",
      
      
      
  }}>
            <br /><br /><br />
            <Typography variant='h5' style={{fontFamily:"cursive",color:"GrayText"}}>Employee Form</Typography>
            <br />
            
      <TextField variant="outlined"  label="Name" style={{borderRadius:"60px"}}></TextField>
      <br />
      <br />
     
      <TextField variant="outlined" label="Designation" style={{borderRadius:"60px"}}></TextField>
      <br />
      <br />
      <TextField variant="outlined" label="Location"  style={{borderRadius:"60px"}}></TextField>
      <br/>
      <br />
      <TextField variant="outlined" label="Salary"  style={{borderRadius:"60px"}}></TextField>

      <br />
      <br />
      <Button variant="contained" style={{color:"Success" ,borderRadius:"100px"  }} >Submit</Button>



    </div>
  )
}

export default Employee_Form