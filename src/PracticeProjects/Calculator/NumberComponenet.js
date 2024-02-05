import { useState } from "react";
// import { styled } from "@mui/material/styles";
// import Grid from "@mui/material/Unstable_Grid2";
// import Paper from "@mui/material/Paper";
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import { Button } from "@mui/material";
import "./NumberComponenet.css";

// const div className='num' = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "light" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(3),
//   marginTop:theme.spacing(1),
//   textAlign: "center",
//   color: '#fff',
//   // flexDirection:"row",
// }));

export default function NumberCalculator() {
  const [ar, setAr] = useState([]);

  const numberClick = (e) => {
    const [data] = e.target.value;
    // console.log(e.target.value);
    setAr((updatedAr) => [...updatedAr, data]);
    // console.log(ar);
  };
  const totaloperation = () => {
    let total = ar[0];
    let i = 1;
    while (i < ar.length) {
      // console.log(ar[i]);
      if (ar[i] === "+") {
        total = parseInt(total) + parseInt(ar[i + 1]);
      }
      if (ar[i] === "-") {
        total = parseInt(total) - parseInt(ar[i + 1]);
      }
      if (ar[i] === "*") {
        console.log(total * ar[i + 1], "ssss");
        total = parseInt(total) * parseInt(ar[i + 1]);
      }
      if (ar[i] === "/") {
        total = parseInt(total) / parseInt(ar[i + 1]);
      }
      if (ar[i] === "%") {
        total = parseInt(total) % parseInt(ar[i + 1]);
      }
      i = i + 2;
    }
    // console.log(total);
    setAr([total]);
  };
  const Cleared = () => {
    setAr([]);
  };
  return (
    <div className="cal">
      <div id="Numbersdisplay">{ar}</div>
      <div className="Buttonsbox">
        <div className="rect">
          <Button className="num" onClick={numberClick} value={"AC"}>
            AC
          </Button>
          <Button className="num" onClick={numberClick} value={"/"}>
            /
          </Button>
          <Button className="num" onClick={numberClick} value={"*"}>
            *
          </Button>
          <Button className="num" onClick={numberClick} value={"7"}>
            7
          </Button>
          <Button className="num" onClick={numberClick} value={"8"}>
            8
          </Button>
          <Button className="num" onClick={numberClick} value={"9"}>
            9
          </Button>
          <Button className="num" onClick={numberClick} value={"4"}>
            4
          </Button>
          <Button className="num" onClick={numberClick} value={"5"}>
            5
          </Button>
          <Button className="num" onClick={numberClick} value={"6"}>
            6
          </Button>
          <Button className="num" onClick={numberClick} value={"1"}>
            1
          </Button>
          <Button className="num" onClick={numberClick} value={"2"}>
            2
          </Button>
          <Button className="num" onClick={numberClick} value={"3"}>
            3
          </Button>
          <Button className="num" onClick={numberClick} value={"."}>
            .
          </Button>
          <Button className="num" onClick={numberClick} value={"0"}>
            0
          </Button>
        </div>
        <div className="colu">
          <Button className="sidebutton" onClick={Cleared} value={"Clr"}>
            Clr
          </Button>
          <Button className="sidebutton" onClick={numberClick} value={"%"}>
            %
          </Button>
          <Button className="num" onClick={numberClick} value={"-"}>
            -
          </Button>
          <Button className="sidebutton" onClick={numberClick} value={"+"}>
            +
          </Button>
          <Button className="sidebutton" onClick={totaloperation} value={"="}>
            =
          </Button>
        </div>
      </div>
    </div>
  );
}

// data = ['5', '+', '6', '+', '9', '-', '20','+','10'];
// let total = data[0];
// let operttor = '';
// let i = 1;
// while (i < data.length) {
//   console.log(data[i]);
//   if (data[i] === '+') {
//     // console.log(parseInt(total) + parseInt(data[i + 1]));
//     total = parseInt(total) + parseInt(data[i + 1]);
//   }
//   if (data[i] === '-') {
//     total = parseInt(total) - parseInt(data[i + 1]);
//   }
//   i = i + 2;
// }
// console.log(total);
