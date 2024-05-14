import React from 'react'

function EditPdt({ id }) {
  
  async function handleedit() {
    try {
      const res = fetch('http://localhost:3000', {
      headers: {

      },
      body: {}  
      
    })
  
    } catch (error) {
      console.log('+++++++++++++++++++++++++ error', error);      
    }
    
    


  }

  const editbtn = (
    <button type="button" onClick={handleedit} className=' bg-blue-700  px-5 p-1 text-white rounded-lg'>Edit</button>
  ) 

  return (
    <>
      {editbtn}
    </>
  )
}

export default EditPdt