import React from 'react'
import './Sidebar.css'
import { useState } from "react";
export const Sidebar = () => {
  const data=[
    {
        Field : 'Basic',
        Field_Name1: 'text Field',
        Field_Name2: 'Radio Button',
        Field_Name3: 'Password',
        Field_Name4: 'File Upload',
    },
    {
        Field : 'Basic2',
        Field_Name1: 'text Field',
        Field_Name2: 'Radio Button',
        Field_Name3: 'Password',
        Field_Name4: 'File Upload',
    }
]
const [selected,setSelected]=useState(0)
const toggle=(i)=>{
    if(selected==i){
        return setSelected(null)
    }
    setSelected(i)
}

  return (
    <>
        <nav>
        {data.map((item,i)=>(
            <>
                 <div className="title" onClick={()=>toggle(i)}>
                    <ul>{item.Field}</ul>
                      <span>{selected===i ? '-':'+'}</span>
                 </div>
                 <div className={selected===i ? "content show":"content"}>
                    <li>{item.Field_Name1}</li>
                    <li>{item.Field_Name2}</li>
                    <li>{item.Field_Name3}</li>
                    <li>{item.Field_Name4}</li>
                 </div>

             </>
        ))}
            {/* <ul>
              <li>Text Field</li>
              <li>Text Area</li>
              <li>Number</li>
              <li>Password</li>
              <li>CheckBox</li>
              <li>Select</li>
              <li>Radio Button</li>
              <li>Radio Button</li>
              <li>Radio Button</li>
              <li>Radio Button</li>
              <li>Radio Button</li>
            </ul> */}
        </nav>
    </>
  )
}
