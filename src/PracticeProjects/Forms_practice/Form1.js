import { Typography, Box, TextField, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";

export default function LoginFormComponent() {
  // const [email,setemail] =React.useState('')
  // const [passWord, setPassWord] = React.useState('')

  const [formData, setFormData] = React.useState({
    email: "",
    passWord: "",
  });
  const [errors, setErrors] = React.useState({
    emailError: "",
    passwordError: "",
  });
  const onChangeInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };
  function validation(name, value) {
    let error = {
      emailError: "",
      passWordError: "",
    };

    if (name === "email") {
      if (!value.trim()) {
        error.emailError = "Email is required";
      } else if (!value.endsWith("@gmail.com")) {
        error.emailError = "Email must be valid";
      } else {
        error.emailError = "";
      }
    }
    if (name === "passWord") {
      if (value.trim(" ").length < 7) {
        error.passwordError = "password musst contains of 7 characters";
      } else {
        error.passwordError = "";
      }
    }

    return error;
  }

  const onChangeInput2 = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
    const errors_data = validation(name, value);
    setErrors(errors_data);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    // const settingerrors =
    // setErrors({
    //   ...errors,
    //   emailError: /\S+@\S+\.\S+/.test(formData.email)
    //     ? ""
    //     : "please enter a valid email address",
    //   passwordError:
    //     !formData.passWord.includes(formData.email) &&
    //     formData.passWord.length > 5
    //       ? ""
    //       : "please enter a password",
    // });
    // setErrors(settingerrors);
    // console.log(formData.passWord.includes(formData.email.replace('@gmail.com', '')));
  };

  const formSubmit2 = (e) => {
    e.preventDefault();
    // const settingerrors =
    // setErrors({
    //   ...errors,
    //   emailError: /\S+@\S+\.\S+/.test(formData.email)
    //     ? ""
    //     : "please enter a valid email address",
    //   passwordError:
    //     !formData.passWord.includes(formData.email) &&
    //     formData.passWord.length > 5
    //       ? ""
    //       : "please enter a password",
    // });
    // setErrors(settingerrors);
    // console.log(formData.passWord.includes(formData.email.replace('@gmail.com', '')));
  };
  return (
    <Box className="FormBox">
      {/* <Paper className="FormPaper">
        <div className="FormHolder">
          <Typography variant="h4" pl="10px">
            Login Form Submit Validation
          </Typography>
          <form className="FormFields" onSubmit={formSubmit}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <div>
                <label className="Labels">Email:</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  name="email"
                  value={formData.email || ""}
                  onChange={onChangeInput}
                />
              </div>

              <div>{errors.emailError && <span>{errors.emailError}</span>}</div>
            </Box>
            <br />
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <div>
                <label className="Labels">PassWord:</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  name="passWord"
                  value={formData.passWord || ""}
                  onChange={onChangeInput}
                />
              </div>

              <div>
                {errors.passwordError && <span>{errors.passwordError}</span>}
              </div>
            </Box>
            <br />
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Button variant="contained" className="LoginButton" type="submit">
                Login
              </Button>
              <br />
              <Typography>Create Account....!</Typography>
            </Box>
          </form>
        </div>
      </Paper> */}
      <Paper className="FormPaper">
        <div className="FormHolder">
          <Typography variant="h4" pl="10px">
            Login Form Realtime Validation
          </Typography>
          <form className="FormFields" onSubmit={formSubmit2}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <div>
                <label className="Labels">Email:</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  name="email"
                  value={formData.email || ""}
                  onChange={onChangeInput2}
                />
              </div>

              <div>{errors.emailError && <span>{errors.emailError}</span>}</div>
            </Box>
            <br />
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <div>
                <label className="Labels">PassWord:</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  name="passWord"
                  value={formData.passWord || ""}
                  onChange={onChangeInput2}
                />
              </div>

              <div>
                {errors.passwordError && <span>{errors.passwordError}</span>}
              </div>
            </Box>
            <br />
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Button variant="contained" className="LoginButton" type="submit">
                Login
              </Button>
              <br />
              <Typography>Create Account....!</Typography>
            </Box>
          </form>
        </div>
      </Paper>
    </Box>
  );
}
