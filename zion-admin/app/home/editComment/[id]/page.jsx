import React from 'react'
import EditCommentForm from '../EditCommentForm';

const getCommentbyId = async (id) => {
  try {
   console.log('getttttttt');
    const res = await fetch(`http://localhost:3000/api/comments/${id}`, {
      cache: "no-store",
     });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }
    console.log("Response data:", data); 
    return res.json();

  } catch (error) {
    console.log(error);
  }
};

export default async  function EditComment({ params }) {

  const { id } = params
  const { comment } = await getCommentbyId(id)   
  const {name, email , content }= comment
  return (
    <EditCommentForm id={id} name={name} email={email} content={content}/>
  )
}
