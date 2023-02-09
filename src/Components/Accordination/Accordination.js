// import React from 'react'
// import './Accordination.css'
// import { useState } from "react";

// export const Accordination = () => {

//      const data=[
//         {
//             Field : 'Basic',
//             Field_Name1: 'text Field',
//         },
//         {
//             Field : 'Basic2',
//             Field_Name1: 'text Field2',
//         }
//     ]
//     const [selected,setSelected]=useState(0)
//     const toggle=(i)=>{
//         if(selected===i){
//             return setSelected(null)
//         }
//         setSelected(i)
//     }
    
//   return (
//     <div className="wrapper">
//         <div className="accordion">
//         {data.map((item,i)=>(
//             <div className="item">
//                 <div className="title" onClick={()=>toggle(i)}>
//                     <h2>{item.Field}</h2>
//                     <span className='icons'>{selected===i ? '-':'+'}</span>
//                 </div>
//                 <div className={selected===i ? "content show":"content"}>
//                     {item.Field_Name1}
//                 </div>

//             </div>
//         ))}
//         </div>

//     </div>
//   )
// }
