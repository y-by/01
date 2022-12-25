import React from "react"
import memesData from "../memesData"


export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })
  const [allMemes, setallMemes] = React.useState(memesData)
  
  function getMemeImage() {
    const memesArray = allMemes.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

function handleChange(event) {
  // console.log(event.target)
  const {name, value} = event.target
  setMeme(prevMeme => ({
    ...prevMeme,
    [name]: value
  }))
}

  return (
    <main>
      <div className="form">
        <input 
          type="text" 
          placeholder="Top text" 
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input 
          type="text" 
          placeholder="Bottom text" 
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button 
          className="form--button"
          onClick={getMemeImage}
        >
          Get new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" alt="Random image"/>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}