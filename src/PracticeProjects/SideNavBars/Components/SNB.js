import React from "react";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import { click } from "@testing-library/user-event/dist/click";
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';

// export default function SNB1() {
//     function ListItemLink(props) {
//   const { to, open,name } = props;
//   console.log(props);
//   let icon = null;
//   if (open != null) {
//     icon = open ? <ExpandLess /> : <ExpandMore />;
//   }

//     return (
//         <li style={{ display: "block" }}>
//       <Link to={to} style={{ textDecoration: "none", color: "black" }}>
//         {name}{icon}
//       </Link>

//     </li>
//   );
// }
//     const [opened, setOpened] = React.useState(false);
//     const handleClick = () => {
//         setOpened((prevOpen) => !prevOpen);
//         console.log(opened)
//       };
//     return (
//         <>
//       <Box
//         style={{
//           display: "flex",
//           width: "100%",
//           bgcolor: "#F0EBCE",
//         }}
//       >
//         <Box width={"100%"}>
//           <ul style={{ padding: "10px 10px 10px 15px" }}>
//             <ListItemLink to="/Home" name="Home" open={opened} onClick={handleClick}/>
//             <Collapse in={opened} timeout="auto" unmountOnExit>
//               <List disablePadding >
//                 <ListItemLink sx={{ pl: 7 }} to="Competency/Skill" name="Skill"/>
//               </List>
//             </Collapse>
//             <ListItemLink to="DashBoard" name="Dashboard"/>

//             {/* <li style={{ display: "block" }}>
//               <Link
//                 to="Competency"
//                 style={{ textDecoration: "none", color: "black" }}
//               >
//                 Competency
//               </Link>
//               <Collapse component="li" in={false} timeout="auto" unmountOnExit>
//                 <li disablePadding>
//                   <ListItemLink sx={{ pl: 4 }} to="/Competency/Skill" />
//                 </li>
//                 <li disablePadding>
//                 <ListItemLink
//                     sx={{ pl: 4 }}
//                     to="/Competency/CompetencyType"
//                   />
//                 </li>
//                 <li disablePadding>
//                   <ListItemLink
//                     sx={{ pl: 4 }}
//                     to="/Competency/CompetencyLevel"
//                   />
//                 </li>
//                 <li disablePadding>
//                   <ListItemLink sx={{ pl: 4 }} to="/Competency/Competency" />
//                 </li>
//               </Collapse>
//             </li>
//             <li style={{ display: "block" }}>
//               <Link
//                 to="Page3"
//                 style={{ textDecoration: "none", color: "black" }}
//               >
//                 Page3
//               </Link>
//             </li> */}
//           </ul>
//         </Box>
//       </Box>
//     </>
//   );
// }

export default function SNB1() {
  const ListItemLink = ({ to, open, name, onClick,...props }) => {
    const handleClick = () => {
      if (onClick) {
        onClick();
      }
    };

    return (
      <Box
        style={{
          top: "30px",
          display: "flex",
          alignItems: "center",
          // backgroundColor: "your_inactive_background_color", // Set the default background color
        }}
        onClick={handleClick}
      >
        <NavLink
        // startIcon={startIcon}
          to={to}
          style={{
            textDecoration: "none",
            color: "#FFFFFF", // Set the active background color
            // backgroundColor: isActive ? 'darkgray' : '#1C2F72',
            // hoverBackgroundColor:"#1C2F72",
            padding: "5px", // Add padding for better visibility
          }}
        >
          
          {name}
        </NavLink>
        <Box style={{ marginLeft: "auto", color: "#FFFFFF" }}>
          {open != null && (open ? <ExpandLess /> : <ExpandMore />)}
        </Box>
      </Box>
    );
  };

  const ItemLink = ({ to, open, name, onClick }) => {
    const handleClick = () => {
      if (onClick) {
        onClick();
      }
    };
    const activeLinkStyles = {
      color: 'white',            // Text color for active links
      backgroundColor: 'black'    // Background color for active links
    };
    return (
    
      <Box
        style={{
          top: "30px",
          display: "flex",
          alignItems: "center",
          // backgroundColor: open ? "darkgray" : "#1C2F72",
          // backgroundColor: "your_inactive_background_color", // Set the default background color
        }}
        onClick={handleClick}
        
      >
        <NavLink
          to={to}
          // activeClassName="activeLink" 
          style={{
            textDecoration: "none",
            color: "#FFFFFF", // Set the active background color
            padding: "5px", // Add padding for better visibility
          }}
          // activeStyle={activeLinkStyles}
        >
          {name}
        </NavLink>
      </Box>
    );
  };

  const [openedCompentency, setOpenedCompentency] = React.useState(false);
  const [openedDepartment, setOpenedDepartment] = React.useState(false);
  const [openedPassport, setOpenedPassport] = React.useState(false);
  const [openedDashBoard, setOpenedDashBoard] = React.useState(false);
  const [openedOrganisationTree, setOpenedOrganisationTree] = React.useState(false);
  const [openedImportExcel, setOpenedImportExcel] = React.useState(false);
  return (
    <>
      <Box
        style={{
          display: "flex",
          width: "100%",
          bgcolor: "#F0EBCE",
        }}
      >
        <Box width={"100%"}>
          <ul style={{ padding: "10px 10px 10px 15px" }}  >
            <ItemLink to="/DashBoard" name="Dashboard" />
            <Box
              open={openedCompentency}
              onClick={() => {
                setOpenedCompentency((prevOpen) => !prevOpen);
                // setOpenedDepartment((prevOpen) => !prevOpen);
                // setOpenedPassport((prevOpen) => prevOpen);
              }}
              sx={{
                padding: "5px 5px 5px 5px",
                color: "#FFFFFF",
                backgroundColor: openedCompentency ? "#68B0DA" : "",
                borderRadius: "3px",
              }}
            >
              Competency
            </Box>
            <Collapse in={openedCompentency} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemLink
                  sx={{ pl: 7 }}
                  to="/Competency/Skill"
                  name="Skill"
                />
              </List>
              <List disablePadding>
                <ListItemLink
                  sx={{ pl: 7 }}
                  to="/Competency/CompetencyType"
                  name="CompetencyType"
                />
              </List>
              <List disablePadding>
                <ListItemLink
                  sx={{ pl: 7 }}
                  to="/Competency/CompetencyLevel"
                  name="CompetencyLevel"
                  
                />
              </List>
              <List disablePadding>
                <ListItemLink
                  sx={{ pl: 7 }}
                  to="/Competency/Competency"
                  name="Competency"
                />
              </List>
            </Collapse>
            <Box
              open={openedDepartment}
              onClick={() => {
                setOpenedDepartment((prevOpen) => !prevOpen);
                // setOpenedPassport((prevOpen) => prevOpen);
                // setOpenedCompentency((prevOpen) => prevOpen);
              }}
              sx={{
                padding: "5px 5px 5px 5px",
                color: "#FFFFFF",
                backgroundColor: openedDepartment ? "#68B0DA" : "",
                borderRadius: "3px",
              }}
            >
              Department
            </Box>
            <Collapse in={openedDepartment} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemLink
                  sx={{ pl: 7 }}
                  to="/Department/Practice"
                  name="Practice"
                />
              </List>
              <List disablePadding>
                <ListItemLink
                  sx={{ pl: 7 }}
                  to="/Department/Department"
                  name="Department"
                />
              </List>
              <List disablePadding>
                <ListItemLink
                  sx={{ pl: 7 }}
                  to="/Department/Location"
                  name="Location"
                />
              </List>
              <List disablePadding>
                <ListItemLink
                  sx={{ pl: 7 }}
                  to="/Department/Grade"
                  name="Grade"
                />
              </List>
              <List disablePadding>
                <ListItemLink
                  sx={{ pl: 7 }}
                  to="/Department/Title"
                  name="Title"
                />
              </List>
              <List disablePadding>
                <ListItemLink
                  sx={{ pl: 7 }}
                  to="/Department/Roles"
                  name="Role"
                />
              </List>
            </Collapse>
            <Box
              open={openedPassport}
              onClick={() => {
                setOpenedPassport((prevOpen) => !prevOpen);
                // setOpenedCompentency((prevOpen) => prevOpen);
                // setOpenedDepartment((prevOpen) => prevOpen);
              }}
              sx={{
                padding: "5px 5px 5px 5px",
                color: "#FFFFFF",
                backgroundColor: openedPassport ? "#68B0DA" : "",
                borderRadius: "3px",
              }}
            >
              Passport
            </Box>
            <Collapse in={openedPassport} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemLink
                  sx={{ pl: 7 }}
                  to="/Passport/Passport"
                  name="Passport"
                />
              </List>
              <List disablePadding>
                <ListItemLink
                  sx={{ pl: 7 }}
                  to="/Passport/VisaType"
                  name="VisaType"
                />
              </List>
            </Collapse>
            <ItemLink to="/OrganisationTree" name="OrganisationTree" open={true}  
            // activeClassName="activeLink" 
            style={{ backgroundColor: 'black', textDecoration: 'none' }} />
            <ItemLink to="/ImportExcel" name="ImportExcel" open={true} />
          </ul>
        </Box>
      </Box>
    </>
  );
}
