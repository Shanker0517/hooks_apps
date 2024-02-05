import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";

export default function Form() {
  // const [value, setValue]=React.useState(0);
  // const handlechange=(event, newValue)=>{
  //   setValue(newValue)
  //   console.log(event)
  // }
  // const Tab1=()=>{
  //   return <h1>hello</h1>
  // }
  const [serviceList, setServiceList] = React.useState([{ serivce: "" }]);
  // const [count, setCount] = React.useState([1]);
  // const onChange = () => {
  //   setCount([...count, count.push(1)]);
  //   console.log(count);
  // };
  // const [list, setList] = React.useState([dic]);
  // const onChange = () => {
  //   list.push({ "": "" });
  //   setList([...list]);
  //   console.log(list);
  // };
  // ...list,list.push({'':''})
  // console.log(list)
  // console.log(list[2])
  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name]=value
    setServiceList(list);
  };
  const handleServiceAdd = () => {
    setServiceList([...serviceList, { serivce: "" }]);
  };
  const handleServiceRemove=(index)=>{
    const list=[...serviceList];
    list.splice(index,1)
    setServiceList(list)
    console.log(serviceList)
  }
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Container position={"relative"}>
        <Box
          bgcolor={"white"}
          width={700}
          height={"50%"}
          position={"absolute"}
          top={"25%"}
          left={"25%"}
          textAlign={"center"}
        >
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Tabs value={value} onChange={handlechange} centered>
              <Tab label="Item One" ></Tab>
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
            {value===0 && <div color="white">hello from tab1</div>}
            {value===1 && <Tab1 ></Tab1>}
            {value===2 && <div color="white">hello from tab3</div>}
          </Box>
        </Box>
      </Container> */}

      <Box>
        {/* <button onClick={onChange}>add input</button> */}
        {/* <div> */}
        {/* {[...Array(count)].map(( index) => (
        <input key={index} />
      ))} */}
        {/* {count.map((index) => (
            <input key={index} />
          ))} */}
        {/* </div> */}
        {/* <div>
          {list.map((item,index) => {
            return (
              <>
                <input key={index} value={item.value} />
              </>
            );
          })}
        </div> */}
        <form className="App" autoComplete="off">
          <div className="form-field">
            <label htmlFor="service">Service(s)</label>
            {serviceList.map((singleService, index) => (
              <div key={index} className="services">
                <div className="first-division">
                  <input
                    name="service"
                    type="text"
                    id="service"
                    value={singleService.service}
                    onChange={(e) => handleServiceChange(e, index)}
                    required
                  />
                  {serviceList.length - 1 === index &&
                    serviceList.length < 4 && (
                      <button
                        type="button"
                        onClick={handleServiceAdd}
                        className="add-btn"
                      >
                        <span>Add a service</span>
                      </button>
                    )}
                </div>
                <div className="second-division">
                  {serviceList.length!==1&&(
                    <button type="button"
                    onClick={()=> handleServiceRemove(index)}
                    className="remove-btn">
                      <span>remove</span>
                    </button>
                  )}
                </div>

              </div>
            ))}
          </div>
        </form>
      </Box>
    </React.Fragment>
  );
}
