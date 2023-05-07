
import React from 'react'
import { AppBar, Box, Button, Typography ,Toolbar, colors} from '@mui/material'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div >
      <box >
        <AppBar style={{ backgroundColor: "transparent", backdropFilter: "blur(10px)",borderRadius: "0 0 20px 20px",boxShadow:"10px" }}>
          <Toolbar>
            <Typography sx={{flexGrow:1}} align="left" style={{colorMix: '1 0 1 0.2',fontFamily:"cursive" ,color:"steelblue",fontSize:"25px",textShadow:"25px"}}>Employee Navigation</Typography>
            <Button color='inherit'><Link  to ={'view'} style={{textDecoration:'none',color:"royalblue"}}>Home</Link></Button>
            <Button color='inherit'><Link  to ={'add'} style={{textDecoration:'none',color:'royalblue'}}>Employee Form.
</Link></Button>
       
            
          </Toolbar>
        </AppBar>
      </box>
    </div>
  )
}

export default Navbar