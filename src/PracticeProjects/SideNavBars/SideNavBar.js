// import * as React from 'react';
// import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// const drawerWidth = 240;

// export default function SideNavBar(props) {
//     console.log(props)
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div>
//       <Toolbar />
//       <Divider />
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {console.log(index)}
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <ListItem key='All mail' disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//               <InboxIcon />
//               </ListItemIcon>
//               <ListItemText primary='All mail' />
//             </ListItemButton>
//           </ListItem>
//     </div>
//   );

//   // Remove this const when copying and pasting into your project.
//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Responsive drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Box
//         component="nav"
//         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//         aria-label="mailbox folders"
//       >
//         {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//         {/* <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer> */}
//         <Drawer
//           variant="permanent"
//           sx={{
//             display: { xs: 'none', sm: 'block' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//           open
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box
//         component="main"
//         sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
//       >
//         {/* <Toolbar />
//         <Typography paragraph>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//           tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
//           enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
//           imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
//           Convallis convallis tellus id interdum velit laoreet id donec ultrices.
//           Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
//           adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
//           nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
//           leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
//           feugiat vivamus at augue. At augue eget arcu dictum varius duis at
//           consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
//           sapien faucibus et molestie ac.
//         </Typography>
//         <Typography paragraph>
//           Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
//           eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
//           neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
//           tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
//           sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
//           tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
//           gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
//           et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
//           tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
//           eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
//           posuere sollicitudin aliquam ultrices sagittis orci a.
//         </Typography> */}
//       </Box>
//     </Box>
//   );
// }

// SideNavBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * Remove this when copying and pasting into your project.
//    */
//   window: PropTypes.func,
// };

// SideNavBar

import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
// import Link from '@mui/material/Link';
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import ListItemText from "@mui/material/ListItemText";
// import Typography from '@mui/material/Typography';
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link } from 'react-router-dom';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import {
//   Link as RouterLink,
//   Route,
//   Routes,
//   MemoryRouter,
//   useLocation,
// } from 'react-router-dom';

const ParentChildMap = {
  "/Dashboard": "Dashboard",
  "/Associate": "Associate",
  "/Competency": "Competency",
  "/Competency/Skill": "Skill",
  "/Competency/CompetencyType": "CompetencyType",
  "/Competency/CompetencyLevel": "CompetencyLevel",
  "/Competency/Competency": "Competency",
  "/Department": "Department",
  "/Department/Practice": "Practice",
  "/Department/Department": "Department",
  "/Department/Location": "Location",
  "/Department/Grade": "Grade",
  "/Department/Title": "Title",
  "/Department/Role": "Role",
  "/Passport": "Passport",
  "/Passport/Passport": "Passport",
  "/Passport/VisaType": "VisaType",
  "/OrganisationTree": "OrganisationTree",
  "/ImportExcel": "ImportExcel",
};

function ListItemLink(props) {
  console.log(props);
  const { to, open, ...other } = props;
  const primary = ParentChildMap[to];
  let icon = null;
  if (open != null) {
    icon = open ? <ExpandLess /> : <ExpandMore />;
  }
  return (
    <li>
      <ListItem button to={to} {...other}>
        <ListItemText primary={primary} />
        {icon}
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

export default function SideNavBar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
     <CssBaseline />
      {/* <AppBar
        position="fixed"
        sx={{
          left:'19%'
        //   width: { sm: `calc(100% - ${drawerWidth}px)` },
        //   ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Box sx={{ display: "flex", flexDirection: "column", width: 260 }}>
        <List>
          <ListItemLink to="/Dashboard" />
          <ListItemLink to="/Associate" />
          <ListItemLink to="/Competency" open={open} onClick={handleClick} />
          <Collapse component="li" in={open} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItemLink sx={{ pl: 4 }} to="/Competency/Skill" />
            </List>
            <List disablePadding>
              <ListItemLink sx={{ pl: 4 }} to="/Competency/CompetencyType" />
            </List>
            <List disablePadding>
              <ListItemLink sx={{ pl: 4 }} to="/Competency/CompetencyLevel" />
            </List>
            <List disablePadding>
              <ListItemLink sx={{ pl: 4 }} to="/Competency/Competency" />
            </List>
          </Collapse>
          <ListItemLink to="/Department" open={open} onClick={handleClick} />
          <Collapse component="li" in={open} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItemLink sx={{ pl: 4 }} to="/Department/Practice" />
            </List>
            <List disablePadding>
              <ListItemLink sx={{ pl: 4 }} to="/Department/Department" />
            </List>
            <List disablePadding>
              <ListItemLink sx={{ pl: 4 }} to="/Department/Location" />
            </List>
            <List disablePadding>
              <ListItemLink sx={{ pl: 4 }} to="/Department/Grade" />
            </List>
            <List disablePadding>
              <ListItemLink sx={{ pl: 4 }} to="/Department/Title" />
            </List>
            <List disablePadding>
              <ListItemLink sx={{ pl: 4 }} to="/Department/Role" />
            </List>
          </Collapse>
          <ListItemLink to="/Passport" open={open} onClick={handleClick} />
          <Collapse component="li" in={open} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItemLink sx={{ pl: 4 }} to="/Passport/Passport" />
            </List>
            <List disablePadding>
              <ListItemLink sx={{ pl: 4 }} to="/Passport/VisaType" />
            </List>
          </Collapse>
          <ListItemLink to="/OrganisationTree" />
          <ListItemLink to="/ImportExcel" />
        </List>
      </Box>
    </Box>
  );
}
