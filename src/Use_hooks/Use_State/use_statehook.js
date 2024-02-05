import { useEffect, useState } from "react";
// import { Grid, Paper } from '@mui/material';
// export default function Inputdatafield(){

// const [data, setData]=useState('')
//     const [dataList, setDataList]=useState([])
//     function AddToList(){
//         const updateList=[...dataList]
//         updateList.push(data)
//         setDataList(updateList)
//         setData('');
//     }
//   return (
//     <div className="App">
//       <input
//       type='text'
//       value={data}
//       placeholder='enter any'
//       onChange={e=> setData(e.target.value)}
//       />

//       <button onClick={AddToList}>add</button>
//       {/* <p>{dataList}</p> */}
//       <div>
//       {dataList.map((d)=>(
//         <li>{d}</li>
//       ))}
//       </div>
//     </div>
//   );

// };

// export default function InputDataField(){
//     const [data, setData]=useState('')
//     const [dataList, setDataList]=useState([])
//     function AddToList(){
//         const updateList=[...dataList]
//         updateList.push(data)
//         setDataList(updateList)
//         setData('');
//         console.log(dataList)
//     }
//     const settingdata= (e)=>{
//         setData(e.target.value);
//         // console.log(data)
//     }
//     return(
//         <>
//         <label>enter the data: </label>
//         <input
//         type="text"
//         value={data}
//         placeholder="Enter your data here..."
//         onChange={settingdata}/>
//         <button onClick={AddToList}>add</button>

// <ul>
//        {dataList.map((d)=>(
//         <li>{d}</li>
//       ))}
//       </ul>
//     </>

//     );
// }

export default function InputDataField() {
  const [data, setData] = useState("");
  const [dataList, setDataList] = useState([]);
  const handleAddMe = () => {
    setDataList(updatedatalist=>[...updatedatalist,data])
    setData('')
  }
  const [count, setCount]=useState(0)
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  },[]);
  return (
    <>
       <input
        type="text"
        value={data}
        placeholder="enter data here"
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <button onClick={handleAddMe}>add me</button>
      <p>{data}</p>

      <ul>
        {dataList.map((e)=> <li>{e}</li>)}
      </ul>
      <div>
        count will increase for every one second {count}
      </div> 
    </>
  );
}



