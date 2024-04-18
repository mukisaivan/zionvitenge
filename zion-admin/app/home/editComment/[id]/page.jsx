import React from 'react'
import EditCommentForm from '../EditCommentForm';

const getCommentbyId = async (id) => {
  try {
   console.log('getttttttt');
    const res = await fetch(`http://localhost:3000/api/comments/${id}`, {
      cache: "no-store",
    });
    
    const data = await res.json() 
    
    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }
    console.log("Response data:", data); 
    console.log(`+++++++++++++++ response is: ${data} +++ end of response ++++++++++++++++++++++++++++++++++++++++`);
    return data //++++++++++++++++++++ main thing here  ;

  } catch (error) {
    console.log(error);
  }
};

export default async  function EditComment({ params }) {
  const { id } = params
  console.log(`______________________ ${JSON.stringify(params.id)} _________________`);
  const { comment } = await getCommentbyId(id)   
  await getCommentbyId(id)   
  const {name, email , content }= comment
  return (
    <>
      <EditCommentForm id={id} name={name} email={email} content={content}/>
    </>
  )
}
