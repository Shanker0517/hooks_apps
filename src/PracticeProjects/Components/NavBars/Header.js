import React from "react";
import { AppBar } from "@mui/material";
import Typography from '@mui/material/Typography';
import { Toolbar } from '@mui/material';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import './Header.css'
export default function HeadingBar(){
    // const useStyles = styled({
    //     gradientDiv: {
    //       background: 'linear-gradient(to bottom, transparent 0%, black 100%)' 
    //     }
    //   })
    return(
    <React.Fragment>
      <div>
       <AppBar >
        <Toolbar>
          <Typography>
            myHeading
          </Typography>
        </Toolbar>
       </AppBar>
      </div>

    </React.Fragment>
    )
}