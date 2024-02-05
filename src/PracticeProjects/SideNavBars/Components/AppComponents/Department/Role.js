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
// import { ComponentsData } from "./Department/Role";
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
  getAllUserRole,
  AddUserRole,
  UpdateUserRole,
  DeleteUserRole,
} from "../APIServices/UserRoleAPIServices";

// export const ComponentsData = React.createContext("");

export default function Roles() {
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [loadingData, setloadingData] = React.useState(true);
  const [editMode, seteditMode] = React.useState(false);
  const [formError, SetFormError] = React.useState({});
  const [userRoleData, setUserRoleData] = React.useState([]);
  const [userRole, setUserRole] = React.useState({
    UserRole: "",
    IsLeader: true,
    HierarchyId: '',
    CreatedBy: 1,
    CreatedDateTime: "",
    ModifiedDateTime: "",
    ModifiedBy: 1,
  });
  const fetchData = async () => {
    try {
      const userroledata = await getAllUserRole();
      // console.log(userroledata.data);
      setUserRoleData(userroledata.data);
      setloadingData(false);
    } catch (error) {
      setloadingData(false);
      console.error("Error fetching roles data:", error);
      throw error;
    }
  };
  React.useEffect(() => {
    console.log('rendering');
    fetchData();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  // Adding Function
  const handleOnSubmitUserRole = (event) => {
    {
      event.preventDefault();
      const isFormValid = Object.values(formError).every(
        (error) => error === ""
      );
      // console.log(userRole);
      if (isFormValid) {
        AddUserRole(userRole).then((response) => {
          setUserRoleData(...userRoleData, response.data);
          setUserRole({
            UserRole: "",
            IsLeader: true,
            HierarchyId: null,
            CreatedBy: null,
            CreatedDateTime: "",
            ModifiedDateTime: "",
            ModifiedBy: null,
          });
          setOpen(false);
          setloadingData(true);
          fetchData();
        });
      } else {
        console.log("Form validation failed");
      }
    }
  };
  // Update Api
  const handleUpdate = (data) => {
    console.log(data);
    seteditMode(true);
    setUserRole({ ...data });
    setOpen(true);
  };
  const handleUpdateUserRole = (Id, Data) => {
    UpdateUserRole(Id, Data).then((response) => {
      setloadingData(true);
      fetchData();
    });
  };
  const onChangeUserRoleUpdateInput = (data) => {
    handleUpdateUserRole(data.Id, data);
    setUserRole({ ...data, UserRole: "" });
    seteditMode(false);
    setOpen(false);
  };
  // Delete Api
  const handleDelete = (Id) => {
    console.log(Id);
    DeleteUserRole(Id).then((response) => {
      // console.log(response.data);
      setloadingData(true);
      fetchData();
    });
  };

  const validation = (field_name, field_value) => {
    let errorMessage = "";
    if (field_name === "UserRole" && field_value.trim() === "") {
      errorMessage = "UserRole is Required";
    }
    if (field_name === "IsLeader" && field_value.trim() === "") {
      errorMessage = "Is Leader is Required";
    }
    if (field_name === "Hierarchy" && field_value.trim() === "") {
      errorMessage = "Is Leader is Required";
    }
    SetFormError({
      ...formError,
      [field_name]: errorMessage,
    });
  };
  const menuItems =
    Array.isArray(userRoleData) &&
    userRoleData.map((userrole) => (
      <MenuItem key={userrole.Id} value={userrole.Id}>
        {userrole.UserRole}
      </MenuItem>
    ));
  // const onChangeUserRoleInput = (e) => {
  //   const { name, value } = e.target;
  //   setUserRole({[name]: value});
  //   console.log(userRole);
  // };
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
          Role
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
          Please check the Role details
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
            padding: "20px 20px 23px 20px",
          }}
        >
          <Box
            style={{
              // width: "120px",
              padding: "6px 8px 6px 8px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "75px",
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
                Role List
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
            onClick={handleClickOpen}
          >
            Add Role
          </Button>
          <Box display={"none"} style={{}}>
            {editMode ? (
              // Edit Mode Dialog Box
              <Dialog open={open}>
                <DialogTitle>Role</DialogTitle>
                <DialogContent>
                  <div>
                    <label>Role Name</label>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      name="Role"
                      type="text"
                      fullWidth
                      variant="standard"
                      placeholder="Edit Role"
                      value={userRole.UserRole}
                      required
                      onChange={(e) => {
                        setUserRole({
                          ...userRole,
                          UserRole: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label>Is Leader</label>
                    <RadioGroup
                      style={{
                        width: "452px",
                        height: "35px",
                      }}
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="IsLeader"
                      value={userRole.IsLeader ? "Yes" : "No"}
                      onChange={(e) => {
                        setUserRole({
                          ...userRole,
                          IsLeader: e.target.value,
                        });
                        validation("IsLeader", e.target.value);
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
                  <div
                    style={{
                      width: "452px",
                      height: "48px",
                      paddingBottom: "8px",
                    }}
                  >
                    <label>Hierarchy</label>
                    <div
                      style={
                        {
                          // width: "452px",
                          // height: "35px",
                          // color: "#1C2F72",
                          // width: Fill (452px)
                          // height: Hug (38px)
                          // padding: 10px, 12px, 10px, 12px
                          // border-radius: 4px
                          // border: 1px
                          // gap: 8px
                        }
                      }
                    >
                      {/* <OutlinedInput
                            autoFocus
                            margin="dense"
                            id="outlined"
                            name="Role"
                            type="text"
                            fullWidth
                            variant="standard"
                            placeholder="Add Hierarchy"
                            // color= "#FFFFFF"
                            value={userRole.HierarchyId}
                            onChange={(e) => {
                              setUserRole({
                                ...userRole,
                                HierarchyId: e.target.value,
                              });
                            }}
                          /> */}
                      <Select
                        style={{
                          width: "452px",
                          height: "45px",
                          borderColor: "#1C2F72",
                        }}
                        value={userRole.HierarchyId}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        fullWidth
                        onChange={(e) => {
                          setUserRole({
                            ...userRole,
                            HierarchyId: e.target.value,
                          });
                          validation("HierarchyId", e.target.value);
                          // console.log(e.target.value);
                        }}
                      >
                        {/* {Array.isArray(userRoleData) && userRoleData.map((userrole) => (
  <MenuItem key={userrole.Id} value={userrole.Id}>
    {userrole.UserRole}
  </MenuItem>
))} */}
                        {menuItems}
                      </Select>
                    </div>
                  </div>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setOpen(false)}>Cancel</Button>
                  <Button
                    onClick={() => {
                      console.log(userRole);
                      onChangeUserRoleUpdateInput(userRole);
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
                    height: "383px",
                    // top: -10104px
                    // left: 16663px
                    // padding: 20px, 0px, 0px, 0px
                    // border-radius: 6px
                    // gap: 16px
                  }}
                >
                  <DialogTitle>
                    <div>Role</div>
                  </DialogTitle>
                  <DialogContent>
                    <div
                      style={{
                        height: "225px",
                      }}
                    >
                      <FormControl>
                        <div
                          style={{
                            width: "452px",
                            height: "58px",
                            paddingBottom: "8px",
                          }}
                        >
                          <div>
                            <label>Role Name</label>
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
                              value={userRole.UserRole}
                              onChange={(e) => {
                                setUserRole({
                                  ...userRole,
                                  UserRole: e.target.value,
                                });
                                validation("UserRole", e.target.value);
                              }}
                            />
                            {formError.UserRole && (
                              <p style={{ color: "red" }}>
                                {formError.UserRole}
                              </p>
                            )}
                          </div>
                          <br />
                        </div>
                        <br />
                        <div>
                          <label>Is Leader</label>
                          <div>
                            <RadioGroup
                              style={{
                                width: "452px",
                                height: "35px",
                              }}
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="IsLeader"
                              onChange={(e) => {
                                setUserRole({
                                  ...userRole,
                                  IsLeader: e.target.value,
                                });
                                validation("IsLeader", e.target.value);
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

                        <div
                          style={{
                            width: "452px",
                            height: "48px",
                            paddingBottom: "8px",
                          }}
                        >
                          <label>Hierarchy</label>
                          <div
                            style={
                              {
                                // width: "452px",
                                // height: "35px",
                                // color: "#1C2F72",
                                // width: Fill (452px)
                                // height: Hug (38px)
                                // padding: 10px, 12px, 10px, 12px
                                // border-radius: 4px
                                // border: 1px
                                // gap: 8px
                              }
                            }
                          >
                            {/* <OutlinedInput
                            autoFocus
                            margin="dense"
                            id="outlined"
                            name="Role"
                            type="text"
                            fullWidth
                            variant="standard"
                            placeholder="Add Hierarchy"
                            // color= "#FFFFFF"
                            value={userRole.HierarchyId}
                            onChange={(e) => {
                              setUserRole({
                                ...userRole,
                                HierarchyId: e.target.value,
                              });
                            }}
                          /> */}
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
                                setUserRole({
                                  ...userRole,
                                  HierarchyId: e.target.value,
                                });
                                validation("HierarchyId", e.target.value);
                                // console.log(e.target.value);
                              }}
                            >
                              {/* {Array.isArray(userRoleData) && userRoleData.map((userrole) => (
  <MenuItem key={userrole.Id} value={userrole.Id}>
    {userrole.UserRole}
  </MenuItem>
))} */}
                              {menuItems}
                            </Select>
                          </div>
                        </div>
                      </FormControl>
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
                      onClick={handleOnSubmitUserRole}
                    >
                      Add
                    </Button>
                  </DialogActions>
                </div>
              </Dialog>
            )}
          </Box>
        </Box>

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
                  <TableCell align="center">UserRole</TableCell>
                  <TableCell align="center">IsLeader</TableCell>
                  <TableCell align="center">Hierarchy</TableCell>
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
                ) : userRoleData === undefined || userRoleData === null ? (
                  <TableRow>
                    <TableCell colSpan={9} align="center">
                      <div>No data</div>
                    </TableCell>
                  </TableRow>
                ) : (
                  userRoleData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((userRoleRow, i) => {
                      let count = page * rowsPerPage + i + 1;
                      return (
                        <TableRow key={userRoleRow.Id}>
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
                            {userRoleRow.UserRole}
                          </TableCell>
                          <TableCell align="center">
                            {userRoleRow.IsLeader ? "Yes" : "No"}
                          </TableCell>
                          <TableCell align="center">
                            {userRoleRow.Hierarchy.UserRole}
                          </TableCell>
                          <TableCell align="center">
                            {userRoleRow.CreatedBy}
                          </TableCell>
                          <TableCell align="center">
                            {userRoleRow.CreatedDateTime}
                          </TableCell>
                          <TableCell align="center">
                            {userRoleRow.ModifiedBy}
                          </TableCell>
                          <TableCell align="center">
                            {userRoleRow.ModifiedDateTime}
                          </TableCell>
                          <TableCell align="center">
                            `
                            <IconButton
                              onClick={() => {
                                seteditMode(true);
                                handleUpdate(userRoleRow);
                              }}
                            >
                              <CreateRoundedIcon paddingright="20px" />
                            </IconButton>
                            <IconButton
                            onClick={() =>
                               handleDelete(userRoleRow.Id)
                               }
                            >
                              <DeleteRoundedIcon paddingleft="20px" />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      );
                    })
                )}
              </TableBody>
              {/* userRoleData === undefined || userRoleData === null ?  */}
            </Table>
          </TableContainer>
        </Box>
        {userRoleData === undefined || userRoleData === null ? (
          <></>
        ) : (
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={userRoleData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
      </Paper>
    </Box>
  );
}
