import React from 'react'
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const showdata = ({data,handleDelete,handleupdate}) => {
  return (
    <>
    {data.map((item)=>{

return(
<div key={item.id} className='d-flex justify-content-between p-1 mx-4 mt-1 align-items-center text-white  ' style={{width:'87%'}}>

<p style={{fontSize:"1.3rem"}}>{item.name}</p>
<p style={{ marginLeft:'12rem', marginRight:"1rem",fontSize:"1.3rem"}}>{item.desc}</p>
<p style={{marginLeft:'18rem', marginRight:"3rem",fontSize:"1.3rem" }}>{item.price}</p>
<div className=' d-flex gap-3' style={{fontSize:"20px"}}>
<p onClick={() =>{handleupdate(item)}}><FaPencilAlt /></p>
<p onClick={() =>{handleDelete(item.id)}}><MdDelete /></p>
</div>
</div>
)
})}
    </>
  )
}

export default showdata