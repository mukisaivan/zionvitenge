import  { DeleteButton } from './DeleteButton'
import {HiPencilAlt} from  'react-icons/hi';

import React from "react";
import Link from 'next/link';

const getComments = async () => {
    console.log('fetching comments');  

    try {
      const res = await fetch("http://localhost:3000/api/comments", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch comments");
      }
      return res.json()
    } catch (error) {
      console.log(error);
  }
    console.log('done fetching comments');  
};



export default async  function CommentsList() {
  const { comments } = await getComments()
  
  const commentsResults = (
     comments.map((com) => (
        <div key={com._id} className="text-red-400 bg-slate-500 rounded-xl">

          <div className="g-4 mt-2 p-3  justify-between h-15">
            <div>
              {com.name}
            </div>
            <div>
              {com.email}
            </div>
            <div>
              {com.content}
           </div>
           <div className='flex space-x-3'>  
            <DeleteButton id={com._id} />
             {/* <EditButton id={com._id}/> */}
              <Link href={`./editComment/${com._id}`}>
                <HiPencilAlt size={24} />
              </Link>
             
           </div>

        </div>
          </div>
        )
  ))

  return (
    <div className="mt-8">
      {
        commentsResults.reverse()
      }
    </div>
  )
}
