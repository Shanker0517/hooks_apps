import React from "react";
import { Button,Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { ComponentsData } from "./Department/Role";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
export default function CommonBox() {
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [loadingData, setloadingData] = React.useState(true);
  const [editMode, seteditMode] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const data = React.useContext(ComponentsData);
  return (
    <Box
      sx={{
        height: "44px",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingBottom: "15px",
        }}
      >
        <Typography
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "17px",
            fontWeight: "700",
            lineHeight: "24px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          {data.ComponentName}
        </Typography>
        <Typography
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "12px",
            fontWeight: "400",
            lineHeight: "18px",
            letteSrpacing: "0em",
            textAlign: "left",
          }}
        >
          Please check the {data.ComponentName} details
        </Typography>
      </Box>
      <Paper
        sx={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 2px 10px 0px #68B0DA0A",
          height: "560px",
          borderRadius: "8px",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "15px 20px 10px 20px",
          }}
        >
          <Box
            style={{
              width: "120px",
              padding: "6px 8px 6px 8px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                fontWeight: "700",
                lineHeight: "24px",
                letterSpacing: "0em",
              }}
            >
              {data.ComponentName} List
            </Typography>
            <div>
              <SearchRoundedIcon></SearchRoundedIcon>
            </div>
          </Box>

          <Button
            startIcon={<AddIcon />}
            style={{
              width: "150px",
              height: "40px",
              backgroundColor: "#1C2F72",
              fontFamily: "Poppins, sans-serif",
              fontSize: "13px",
              fontWeight: "500",
              lineHeight: "20px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#FFFFFF",
            }}
            onClick={handleClickOpen}
          >
            Add {data.ComponentName}
          </Button>
          <Box display={"none"}>
            {editMode ? (
              // Edit Mode Dialog Box
              <Dialog
                open={open}
              >
                <DialogTitle>{data.ComponentName}</DialogTitle>
                <DialogContent>
                  <label>{data.ComponentName} Name</label>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    name={data.ComponentName}
                    type="text"
                    fullWidth
                    variant="standard"
                    placeholder={`Edit ${data.ComponentName}`}
                    // value={practice.Practice}
                    // onChange={onChangePracticeInput}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setOpen(false)}>Cancel</Button>
                  <Button
                    onClick={() => {
                      // onChangePracticeUpdateInput(practice);
                      setOpen(false);
                    }}
                  >
                    Edit {data.ComponentName}
                  </Button>
                </DialogActions>
              </Dialog>
            ) : (
              // add Mode Dialog Box
              <Dialog
                open={open}
              >
                <DialogTitle>{data.ComponentName}</DialogTitle>
                <DialogContent>
                  <label>{data.ComponentName} Name</label>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    name={data.ComponentName}
                    type="text"
                    fullWidth
                    variant="standard"
                    placeholder={`Add ${data.ComponentName}`}
                    // value={practice.Practice}
                    // onChange={onChangePracticeInput}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setOpen(false)}>Cancel</Button>
                  <Button
                  // onClick={handleAddPractice}
                  >
                    Add {data.ComponentName}
                  </Button>
                </DialogActions>
              </Dialog>
            )}
          </Box>
        </Box>

        <Box></Box>
      </Paper>
    </Box>
  );
}
