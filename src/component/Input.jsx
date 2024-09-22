import React from 'react'

const Input = ({name,desc,price,setName,setDesc,setPrice,handleSubmit}) => {
  return (
    <>
    <div className='row p-2 d-flex gap-5'>
<form onSubmit={handleSubmit}>
  <input type="text" className='col-3 mx-1  ' placeholder='name'value={name} onChange={(e) =>{setName(e.target.value)}} />
  <input type="text" className='col-5 mx-1' placeholder='description' value={desc} onChange={(e) =>{setDesc(e.target.value)}} />
  <input type="text" className='col-2 mx-1' placeholder='price' value={price} onChange={(e) =>{setPrice(e.target.value)}} />
  <input type="submit" className='btn btn-primary mx-2' />
</form>
</div>
    </>
  )
}

export default Input