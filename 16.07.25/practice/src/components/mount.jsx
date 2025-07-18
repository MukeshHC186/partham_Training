import { useEffect, useState } from "react";
import ComponentA from "./componentA";
import ComponentB from "./ComponentB";
const Mount = ()=>{
    const [count, setCount]= useState(0)
    const [value, setValue]= useState(5)

    useEffect(()=>{
        console.log("Mounting");
    },[]);

    useEffect(()=>{
        console.log("count is changed",count);
        if(count>5) setValue(<ComponentA/>);
        else setValue(<ComponentB/>)

    },[count]);
    
    useEffect(()=>{
        console.log("value",value);
    },[value]);
    
    useEffect(()=>{
        console.log("without dep. array");
    });
    return(

        <>
          <h1>Count: {count}</h1>
          <button onClick={()=> setCount(count+1)}>Increase Count</button>
          <button onClick={()=> setCount(count-1)}>Decrese Count</button>
          <h1>Value: {value}</h1>
          <button onClick={()=> setValue(value+1)}>Increase Count</button>

        </>
    )
}
export default Mount