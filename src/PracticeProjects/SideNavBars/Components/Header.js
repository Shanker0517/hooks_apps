import { Typography } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function SNBHeader() {
  return (
    <>
      <div
        style={{
          padding: "15px 15px 10px 10px",
          // width: "90%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Typography
            variant="h2"
            style={{
              paddingleft: "10px",
              fontFamily: "Poppins, sans-serif",
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "36px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "rgba(28, 47, 114, 2)",
            }}
          >
            Resource Management
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            paddingRight:'10px'
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", paddingRight:'10px'}}>
            <Typography style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                fontWeight: "700",
                linHeight: "24px",
                letterSpacing: "0em",
                textAlign: "left",

            }}>Marvin McKinney</Typography>
            <Typography
            style={{

                //styleName: 12px/Regular;
            fontFamily: 'Poppins,sans-serif',
            fontSize: '12px',
            fontWeight: '400',
            lineHeight: '18px',
            letterSpacing: '0em',
            textAlign: 'left',


            }}  
            >Super Admin</Typography>
          </div>
          <Avatar alt="Marvin McKinney" src="/static/images/avatar/1.jpg"/>
        </div>
      </div>
    </>
  );
}
