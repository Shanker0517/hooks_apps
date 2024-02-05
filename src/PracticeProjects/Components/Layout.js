import React from "react";
import HeadingBar from "./NavBars/Header"
// import { Box } from "@mui/material";
import './NavBars/Header.css'
export default function Layout(){
    return(
        <>
        {/* <header>
            <Box className='heading'>
                heading
            </Box>
        </header> */}
        <HeadingBar></HeadingBar>
        </>
    )
}