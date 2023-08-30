import React from 'react'
import Users from '../HomeComponents/Users'
import Tasks from '../HomeComponents/Tasks'
import Box from "@mui/material/Box";
export default function Home() {
  return (
    <Box sx={{display:'flex'}}>
    <Users/>
    <Tasks/>
    </Box>
  )
}
