import { useEffect, useState } from "react";

export function Top(){
    const [count, setCount]=useState(0);

    useEffect(()=> console.log('top rendering'))
    return(
        <div>
            <div on onClick={()=> setCount(count+1)}>
                {count}
                
            </div>
            <Middle />
        </div>
    )
}

function Middle(){
    const [count, setCount]=useState(0)
    useEffect(()=> console.log('middle rendering'))
    return(
        <div>
            <div onClick={(()=>{
                setCount(count+1)
            })}>
                {count}
                <Bottom></Bottom>
            </div>
        </div>
    )
}
function Bottom(){
    const [count, setCount]=useState(0)
    useEffect(()=> console.log('bottom rendering'))
    return(
        <div>
            <div onClick={(()=>{
                setCount(count+1)
            })}>
                {count}
                
            </div>
        </div>
    )
}