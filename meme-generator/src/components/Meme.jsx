import React from "react"
export default function Meme() {
  return (
    <main>
      <form className="form">
        <input 
          type="text" 
          placeholder="Top text" 
          className="form--input" 
        />
        <input 
          type="text" 
          placeholder="Bottom text" 
          className="form--input" 
        />
        <button 
          type="submit"
          className="form--button"
        >
          Get new meme image 🖼
        </button>
      </form>
    </main>
  )
}