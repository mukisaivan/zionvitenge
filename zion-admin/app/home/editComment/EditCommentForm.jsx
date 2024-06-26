"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";



export default function EditCommentForm({ id, name, email, content }) {

  const [newcontent, setNewContent] = useState(content)
  const router = useRouter();

  const {newname, newemail} = {name, email}

  async function handleEdit(e) {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/comments/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },            
        body: JSON.stringify({ newname , newemail, newcontent }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch topic");
      }
      router.refresh();
      router.push("/home/trialtasks");
      router.refresh()

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <form onSubmit={handleEdit}>
      <label  className="font-bold">
        Your Name:
      </label>
      <input
        type="text"
        className="task-field"
        placeholder="Whats your name"
        value={name}
      />

      <label className="font-bold">
        Email:
      </label>
      <input
        type="text"
        className="task-field"
        placeholder="Add your email"
        value={email}
      />

      <label className="font-bold">
        Content:
      </label>
      <input
        type="text"
        className="task-field"
        placeholder="Add movie comment"
        onChange={(e) => setNewContent(e.target.value)}
        value={newcontent}
      />

      <button type="submit" className="bg-black text-white p-3 rounded-xl">
        Submit Comment
      </button>
    </form>
  );
}
