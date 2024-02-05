import React from "react";
// import SideNavBar from "./SideNavBars/SideNavBar";
import SNB1 from "./SideNavBars/Components/SNB";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import MTImage from "./SideNavBars/mouritechlog.png";
import Header from "./SideNavBars/Components/Header";

export default function LayoutComponent() {
  return (
    <>
      <Box
        style={{
          width: "100%",
          display: "flex",
          padding: "0px 0px",
          height: "100vh",
          position:'fixed',
        }}
      >
        <Box
          style={{
            backgroundColor: "#1C2F72",
            width: "260px",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <Box
            style={{
              position: "relative",
            }}
          >
            <img
              src={MTImage}
              alt="mouritech"
              width={"182px"}
              height={"38px"}
              style={{ left: "20px", top: "25px", position: "absolute" }}
            />
            <Box
              style={{
                position: "absolute",
                top: "70px",
              }}
            >
              {/* <SideNavBar/> */}
              <SNB1></SNB1>
            </Box>
          </Box>
        </Box>
        {/* header */}
        <Box style={{ width: "90%" }}>
          <Box
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <Header />
          </Box>

          {/* Components Body */}
          <Box
            style={{
              width: "100%",
              height: "90vh",
              backgroundColor: "rgba(246, 246, 247, 2)",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "90%",
                height: "95vh",
                // backgroundColor: "black",
                position: "absolute",
                top: "15px",
                left: "45px",

              }}
            >
              <div>

              <Outlet></Outlet>
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
}



