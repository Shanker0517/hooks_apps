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
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
import AddIcon from "@mui/icons-material/Add";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { Box, IconButton } from "@mui/material";
import { Typography } from "@mui/material";
// import { ComponentsData } from "./Department/Department";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
// import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import { DialogActions } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  getAllDepartment,
  AddDepartment,
} from "../APIServices/DepartmentAPIServices";
import { Fragment } from "react";
import NodeContext from "../ContextComp";
// import 
export default function Department() {
  const practiceData = React.useContext(NodeContext);
  //   const practice=practiceContext
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [loadingData, setloadingData] = React.useState(true);
  const [editMode, seteditMode] = React.useState(false);
  const [departmentData, setDepartmentData] = React.useState([]);
  const [department, setDepartment] = React.useState({
    Department: "",
    IsActive: "",
    CreatedBy: null,
    CreatedDateTime: "",
    ModifiedDateTime: "",
    ModifiedBy: null,
    PracticeId: null,
  });
  const fetchData = async () => {
    try {
      const Departmentdata = await getAllDepartment();
      // console.log(Departmentdata);
      setDepartmentData(Departmentdata.data);
      setloadingData(false);
    } catch (error) {
      console.error("Error fetching roles data:", error);
      //   throw error;
    }
  };
  React.useEffect(() => {
    fetchData();
    console.log(practiceData);
  }, []);
  const handleOnSubmitDepartment = (event) => {
    event.preventDefault();
    console.log(department);
    try {
      AddDepartment(department).then((response) => {
        setDepartmentData(...departmentData, response.data);
        setDepartment({
          Department: "",
          IsActive: "",
          CreatedBy: null,
          CreatedDateTime: "",
          ModifiedDateTime: "",
          ModifiedBy: null,
          PracticeId: null,
        });
        setOpen(false);
        setloadingData(true);
        fetchData();
      });
    } catch (error) {}
  };

  const menuItems = (
    // Array.isArray(practice) &&
    // departmentData.map((practice) => (
    <MenuItem
    // key={practiceData.Practice.Id}
    // value={practiceData.Practice.Practice}
    >
      {/* {console.log(practice)} */}
      {/* {practiceData.Practice.Practice} */}
    </MenuItem>
  );
  // ));
    const parentData=React.useContext(NodeContext)
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
            Department
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
            Please check the Department details
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
                    Department List
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
                Add Department
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
                        height: "353px",
                      }}
                    >
                      <DialogTitle>
                        <div>Department</div>
                      </DialogTitle>
                      <DialogContent>
                        <div>
                          <div>
                            <label>Department Name</label>
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
                              value={department.Department}
                              onChange={(e) => {
                                setDepartment({
                                  ...Department,
                                  Department: e.target.value,
                                });
                              }}
                            />
                          </div>
                          <div>
                            <label>Is Active</label>
                            <div>
                              <RadioGroup
                                style={{
                                  width: "452px",
                                  height: "35px",
                                }}
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="IsActive"
                                onChange={(e) => {
                                  setDepartment({
                                    ...department,
                                    IsActive: e.target.value,
                                  });
                                }}
                              >
                                <FormControlLabel
                                  value="Yes"
                                  control={<Radio />}
                                  label="Yes"
                                />
                                <FormControlLabel
                                  value="No"
                                  control={<Radio />}
                                  label="No"
                                />
                              </RadioGroup>
                            </div>
                          </div>
                          <div>
                            <label>Practice Name</label>
                            <Select
                              style={{
                                width: "452px",
                                height: "45px",
                                borderColor: "#1C2F72",
                              }}
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              fullWidth
                              onChange={(e) => {
                                setDepartment({
                                  ...department,
                                  PracticeId: e.target.value,
                                });
                                console.log(e.target.value);
                              }}
                            >
                              {menuItems}
                            </Select>
                          </div>
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
                          onClick={handleOnSubmitDepartment}
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
              {console.log(parentData)}
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
                      <TableCell align="center">Department Name</TableCell>
                      <TableCell align="center">Practice Name</TableCell>
                      <TableCell align="center">Is Active</TableCell>
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
                    ) : departmentData === undefined ||
                      departmentData === null ? (
                      // no data
                      <TableRow>
                        <TableCell colSpan={9} align="center">
                          <div>No data</div>
                        </TableCell>
                      </TableRow>
                    ) : (
                      departmentData
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((DepartmentRow, i) => {
                          let count = page * rowsPerPage + i + 1;
                          return (
                            <TableRow key={DepartmentRow.Id}>
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
                                {DepartmentRow.Department}
                              </TableCell>
                              <TableCell align="center">
                                {DepartmentRow.Practice.Practice}
                              </TableCell>
                              <TableCell align="center">
                                {/* {console.log(DepartmentRow.IsActive,'sssssss')} */}
                                {DepartmentRow.IsActive ? "Yes" : "No"}
                              </TableCell>

                              <TableCell align="center">
                                {DepartmentRow.CreatedBy}
                              </TableCell>
                              <TableCell align="center">
                                {DepartmentRow.CreatedDateTime}
                              </TableCell>
                              <TableCell align="center">
                                {DepartmentRow.ModifiedBy}
                              </TableCell>
                              <TableCell align="center">
                                {DepartmentRow.ModifiedDateTime}
                              </TableCell>
                              <TableCell align="center">
                                `
                                <IconButton
                                  onClick={() => {
                                    seteditMode(true);
                                    // handleUpdate(DepartmentRow);
                                  }}
                                >
                                  <CreateRoundedIcon paddingright="20px" />
                                </IconButton>
                                <IconButton
                                // onClick={() =>
                                //    handleDelete(DepartmentRow.Id)
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
                  {/* departmentData === undefined || departmentData === null ?  */}
                </Table>
              </TableContainer>
            </Box>
            {departmentData === undefined || departmentData === null ? (
              <></>
            ) : (
              <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={departmentData.length}
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
