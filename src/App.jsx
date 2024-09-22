import React, { useState } from 'react'

import Appname from './component/appname'
import Showdata from './component/showdata';
import Input from './component/Input';
const App = () => {
 const [data,setData] = useState(JSON.parse(localStorage.getItem("data"))||[])
const [name,setName] = useState("")
const [desc,setDesc] = useState("")
const [price,setPrice] = useState("")
const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
const handleSubmit = (e)=>{
  e.preventDefault()
  if(isEdit){
    const updatData = data.map((item) =>
      item.id === editId ? { ...item, name, desc, price } : item
    );
    setData(updatData);
    localStorage.setItem("data",JSON.stringify(updatData))
    setIsEdit(false);
    setEditId(null);
  }else{
    localStorage.setItem("data",JSON.stringify([...data,{id:Math.random(),name:name,desc:desc,price:price}]))
    setData([...data,{id:Math.random(),name:name,desc:desc,price:price}])
  }
  setName("")
  setDesc("")
  setPrice("")


}
const handleDelete = (id)=>{
  const filteredData = data.filter((item)=>item.id !== id)
  localStorage.setItem("data",JSON.stringify(filteredData))
  setData(filteredData)
}

const handleupdate = (item)=>{
setIsEdit(true)
setEditId(item.id)
setName(item.name)
setDesc(item.desc)
setPrice(item.price)
}
  return (
    <>
<div className='bg-dark' style={{height:'97vh'}}>
<Appname />
<div className='container border border-1'>
<Input handleSubmit={handleSubmit} name={name} desc={desc} price={price} setName={setName} setDesc={setDesc} setPrice={setPrice} isEdit={isEdit} setEditId={setEditId} editId={editId} />
<Showdata data={data} handleDelete={handleDelete} handleupdate={handleupdate}/>


</div>
</div>
    </>
  )
}

export default App