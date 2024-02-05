import React from "react";
import { Box, AppBar, Typography } from "@mui/material";
// import Button from "@mui/material/Button";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import { Link } from "react-router-dom";
// import { Block } from "@mui/icons-material";
export default function CockTailNavBars() {
  return (
    // <AppBar>
    //   <Box
    //     display="flex"
    //     justifyContent="space-between"
    //     padding="4px"
    //     alignItems="center" // Center vertically
    //     backgroundColor="#4E6C50"
    //   >
    //     <Typography variant="h5" component="div" color="#F0EBCE">
    //       FoodApp
    //     </Typography>

    //     <Box display="flex" alignItems="center">
          // {/* {navItems.map((item) => (
          //     <Button key={item} sx={{ color: "#F0EBCE", padding: "10px" }}>
          //     {item}
          //     </Button>
          //   ))} */}
    //       <ul>
    //         <li key="Home" style={{ padding: "10px", display: "inline" }}>
    //           <Link
    //             to="Home"
    //             style={{ textDecoration: "none", color: "#F0EBCE" }}
    //           >
    //             Home
    //           </Link>
    //         </li>
    //         <li key="RecipeBook" style={{ padding: "10px", display: "inline" }}>
    //           <Link
    //             to="RecipeBook"
    //             style={{ textDecoration: "none", color: "#F0EBCE" }}
    //           >
    //             Recipe Book
    //           </Link>
    //         </li>
    //         <li key="AddRecipe" style={{ padding: "10px", display: "inline" }}>
    //           <Link
    //             to="AddRecipe"
    //             style={{ textDecoration: "none", color: "#F0EBCE" }}
    //           >
    //             Add Recipe
    //           </Link>
    //         </li>
    //         <li
    //           key="Profile"
    //           style={{ color: "#F0EBCE", padding: "10px", display: "inline" }}
    //         >
    //           <Link to="Profile">
    //             <AccountCircleSharpIcon
    //               sx={{ color: "#F0EBCE", fontSize: "30px" }}
    //             />
    //           </Link>
    //         </li>
    //       </ul>
    //     </Box>
    //   </Box>
    // </AppBar>
    <AppBar>
      <Box
        display="flex"
        justifyContent="space-between"
        padding="8px"  // Increased padding for better spacing
        alignItems="center"
        backgroundColor="#4E6C50"
      >
        <Typography variant="h5" component="div" color="#F0EBCE">
          FoodApp
        </Typography>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', alignItems: 'center' }}>
          <li style={{ padding: '10px', display: 'inline' }}>
            <Link to="Home" style={{ textDecoration: 'none', color: '#F0EBCE' }}>
              Home
            </Link>
          </li>
          <li style={{ padding: '10px', display: 'inline' }}>
            <Link to="RecipePapers" style={{ textDecoration: 'none', color: '#F0EBCE' }}>
            Recipe Papers
            </Link>
          </li>
          <li style={{ padding: '10px', display: 'inline' }}>
            <Link to="AddRecipe" style={{ textDecoration: 'none', color: '#F0EBCE' }}>
              Add Recipe
            </Link>
          </li>
          <li style={{ padding: '10px', display: 'inline' }}>
            <Link to="Profile" style={{ textDecoration: 'none', color: '#F0EBCE', display: 'flex', alignItems: 'center' }}>
              <AccountCircleSharpIcon sx={{ fontSize: '30px', marginRight: '5px' }} />
              Profile
            </Link>
          </li>
        </ul>
      </Box>
    </AppBar>
  );
}
