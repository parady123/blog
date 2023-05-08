import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'
import axios from 'axios'
const Home = () => {
  return (
    <div>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog app
          </Typography>
          <Button color="secondary" variant='contained'><Link to='/'>view blog</Link></Button>
          <Button color="secondary" variant='contained'><Link to='/create'>add blog</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Home