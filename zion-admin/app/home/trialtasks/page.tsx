"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function TrialTask({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      if (!name || !email || !content) {
        alert("All fields are required.");
        return;
      }
      const res = await fetch("http://localhost:3000/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, content }),
      });

      if (res.ok) {
        router.refresh()
        setContent('')
        setEmail('')
        setName('')
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const submissionform = (
    <form onSubmit={handleSubmit}>
      <label htmlFor="" className="font-bold">
        Your Name:
      </label>
      <input
        type="text"
        className="task-field"
        placeholder="Whats your name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <label htmlFor="" className="font-bold">
        Email:
      </label>
      <input
        type="text"
        className="task-field"
        placeholder="Add your email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label htmlFor="" className="font-bold">
        Content:
      </label>
      <input
        type="text"
        className="task-field"
        placeholder="Add movie comment"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />

      <button type="submit" className="bg-black text-white p-3 rounded-xl">
        Submit Comment
      </button>
    </form>
  );

  return (
    <>
      {submissionform}
      {children}
    </>
  );
}
