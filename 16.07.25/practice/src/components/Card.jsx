import { useState } from "react"
const Card = (props)=>{
    const [color,setColor] = useState("#c9c3b6ff")
    const {text,setText} = props;
    const handlecolorChange = ()=>{
        setColor(color === "#c35dcfff" ? "#74a6db" : "#c35dcfff")
    }
    return (
        <div style={{width:"300px",height:"200px",border:"1px solid red",backgroundColor:color}}>
            <h1>{text}</h1>
        <button onClick={handlecolorChange}>Change Color</button>
        <button onClick={()=>setText(text==="Mukesh"?"Sitaram":"Mukesh")}>Change Text</button>
        </div>
    )
}
export default Card