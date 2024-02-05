import React from "react";
// import CommonBox from '../CommonBox';
import {
  Button,
  Input,
  Paper,
  TableFooter,
  OutlinedInput,
  Divider,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AddIcon from "@mui/icons-material/Add";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { Box, IconButton } from "@mui/material";
import { Typography } from "@mui/material";
// import { ComponentsData } from "./Department/Location";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  getAllLocation,
  AddLocation,
} from "../APIServices/LocationAPIServices";
import { Fragment } from "react";
export default function Location() {
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [loadingData, setloadingData] = React.useState(true);
  const [editMode, seteditMode] = React.useState(false);
  const [locationData, setLocationData] = React.useState([]);
  const [location, setLocation] = React.useState({
    Location: "",
    LocationCode: "",
    CreatedBy: null,
    CreatedDateTime: "",
    ModifiedDateTime: "",
    ModifiedBy: null,
  });
  let recordsdatatime=null
  const fetchData = async () => {
    try {
      const locationdata = await getAllLocation();
      // console.log(locationdata);
      setLocationData(locationdata.data);
      setloadingData(false);
    } catch (error) {
      console.error("Error fetching roles data:", error);
      //   throw error;
    }
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  const handleOnSubmitLocation = (event) => {
    event.preventDefault();
    try {
      AddLocation(location).then((response) => {
        setLocationData(...locationData, response.data);
        setLocation({
          Location: "",
          LocationCode: "",
          CreatedBy: null,
          CreatedDateTime: "",
          ModifiedDateTime: "",
          ModifiedBy: null,
        });
        setOpen(false);
        setloadingData(true);
        fetchData();
      });
    } catch (error) {}
  };
  return (
    <Fragment>
      <Box
        sx={{
          height: "44px",
          width: "100%",
        }}
      >
        <Box
          style={{
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
            Location
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
            Please check the Location details
          </Typography>
        </Box>
        <Box>
          <Paper
            sx={{
              width: "100%",
              overflow: "hidden",
              backgroundColor: "#FFFFFF",
              boxShadow: "0px 2px 16px 0px #68B0DA0A",
              height: "580px",
              borderRadius: "8px",
            }}
          >
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px 20px 23px 20px",
              }}
            >
              <Box
                style={{
                  //   width: "120px",
                  padding: "6px 8px 6px 8px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    width: "110px",
                    height: "24px",
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
                    Location List
                  </Typography>
                </div>
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
                onClick={() => {
                  setOpen(true);
                }}
              >
                Add Location
              </Button>
              <Box display={"none"} style={{}}>
                {editMode ? (
                  // Edit Mode Dialog Box
                  <Dialog open={open}>
                    <DialogTitle>Role</DialogTitle>
                    <DialogContent></DialogContent>
                    <DialogActions>
                      <Button onClick={() => setOpen(false)}>Cancel</Button>
                      <Button
                        onClick={() => {
                          // onChangePracticeUpdateInput(practice);
                          setOpen(false);
                        }}
                      >
                        Edit Role
                      </Button>
                    </DialogActions>
                  </Dialog>
                ) : (
                  // add Mode Dialog Box
                  <Dialog open={open}>
                    <div
                      style={{
                        width: "500px",
                        height: "283px",
                      }}
                    >
                      <DialogTitle>
                        <div>Location</div>
                      </DialogTitle>
                      <DialogContent>
                        <div>
                          <label>Location Name</label>
                          <OutlinedInput
                            style={{
                              width: "452px",
                              height: "45px",
                              borderColor: "#1C2F72",
                            }}
                            required
                            autoFocus
                            margin="dense"
                            id="outlined"
                            name="Role"
                            type="text"
                            variant="standard"
                            placeholder="Add RoleName"
                            value={location.Location}
                            onChange={(e) => {
                              setLocation({
                                ...location,
                                Location: e.target.value,
                              });
                            }}
                          />
                          <label>Location Code</label>
                          <OutlinedInput
                            style={{
                              width: "452px",
                              height: "45px",
                              borderColor: "#1C2F72",
                            }}
                            required
                            autoFocus
                            margin="dense"
                            id="outlined"
                            name="Role"
                            type="text"
                            variant="standard"
                            placeholder="Add RoleName"
                            value={location.LocationCode}
                            onChange={(e) => {
                              setLocation({
                                ...location,
                                LocationCode: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </DialogContent>
                      <DialogActions>
                        <Button
                          onClick={() => setOpen(false)}
                          style={{
                            width: "83px",
                            height: "36px",
                            backgroundColor: "#1C2F72",
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "13px",
                            fontWeight: "500",
                            lineHeight: "20px",
                            letterSpacing: "0em",
                            textAlign: "left",
                            color: "#FFFFFF",
                          }}
                        >
                          Cancel
                        </Button>
                        <Button
                          style={{
                            width: "61px",
                            height: "36px",
                            backgroundColor: "#1C2F72",
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "13px",
                            fontWeight: "500",
                            lineHeight: "20px",
                            letterSpacing: "0em",
                            textAlign: "left",
                            color: "#FFFFFF",
                          }}
                            onClick={handleOnSubmitLocation}
                        >
                          Add
                        </Button>
                      </DialogActions>
                    </div>
                  </Dialog>
                )}
              </Box>
            </Box>
            <Divider></Divider>
            <Box>
              <Divider></Divider>
              <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow
                      style={{
                        borderTopColor: "#E8E8E8",
                      }}
                    >
                      <TableCell align="center">Id</TableCell>
                      <TableCell align="center">Location Name</TableCell>
                      <TableCell align="center">Location Code</TableCell>
                      <TableCell align="center">CreatedBy</TableCell>
                      <TableCell align="center">CreatedDateTime</TableCell>
                      <TableCell align="center">ModifiedBy</TableCell>
                      <TableCell align="center">ModifiedDateTime</TableCell>
                      <TableCell align="center">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {loadingData ? (
                      <Box>...Loading Data</Box>
                    ) : locationData === undefined || locationData === null ? (
                      // no data
                      <TableRow>
                        <TableCell colSpan={9} align="center">
                          <div>No data</div>
                        </TableCell>
                      </TableRow>
                    ) : (
                      locationData
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((locationRow, i) => {
                          let count = page * rowsPerPage + i + 1;
                          return (
                            <TableRow key={locationRow.Id}>
                              <TableCell
                                align="center"
                                style={{
                                  width: "20px",
                                  height: "20px",
                                }}
                              >
                                {count}
                              </TableCell>
                              <TableCell align="center">
                                {locationRow.Location}
                              </TableCell>
                              <TableCell align="center">
                                {locationRow.LocationCode}
                              </TableCell>

                              <TableCell align="center">
                                {locationRow.CreatedBy}
                              </TableCell>
                              <TableCell align="center">
                                {locationRow.CreatedDateTime}
                              </TableCell>
                              <TableCell align="center">
                                {locationRow.ModifiedBy}
                              </TableCell>
                              <TableCell align="center">
                                
                                {locationRow.ModifiedDateTime}
                              </TableCell>
                              <TableCell align="center">
                                `
                                <IconButton
                                  onClick={() => {
                                    seteditMode(true);
                                    // handleUpdate(locationRow);
                                  }}
                                >
                                  <CreateRoundedIcon paddingright="20px" />
                                </IconButton>
                                <IconButton
                                // onClick={() =>
                                //    handleDelete(locationRow.Id)
                                //    }
                                >
                                  <DeleteRoundedIcon paddingleft="20px" />
                                </IconButton>
                              </TableCell>
                            </TableRow>
                          );
                        })
                    )}
                  </TableBody>
                  {/* locationData === undefined || locationData === null ?  */}
                </Table>
              </TableContainer>
            </Box>
            {locationData === undefined || locationData === null ? (
              <></>
            ) : (
              <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={locationData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={(event, newPage) => setPage(newPage)}
                onRowsPerPageChange={(event) => {
                  setRowsPerPage(+event.target.value);
                  setPage(0);
                }}
              />
            )}
          </Paper>
        </Box>
      </Box>
    </Fragment>
  );
}
