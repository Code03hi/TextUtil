import { useState } from "react";
import React from 'react'

export default function TextUtils(props) {

  const userText = document.getElementsByClassName("voice");

  const onChangeHandle = (event) => {
    setText(event.target.value);
  }

  const noOfWord = () => {
    let count = text.replace(/\n/g,"").split(' ').filter((value) => value !== "" && value !== ".").length;
    return count;
  }

  const speak = () => {
    const message = new SpeechSynthesisUtterance();
    message.text = (text);
    setText(text);
    window.speechSynthesis.speak(message);
    console.log(userText.innerText);
    if (userText.innerText === "Speak") {
      userText.innerHTML = "Stop";
    }
  }

  const handleUpperCase = () => {
    let upper = text.toUpperCase();
    setText(upper);
  }

  const copyText = () => {
    navigator.clipboard.writeText(text);
  }

  const handleLowerCase = () => {
    let upper = text.toLowerCase();
    setText(upper);
  }

  const removeWhiteSpace = () => {
    let words = text.split(/[ ]+/);
    setText(words.join(" "));
  }

  const clearText = () => {
    setText("");
  }

  const replaceWord = () => {
    let find = prompt("Enter the word which you want to find");
    let replace = prompt("Enter the word which you want to replace");
    text.replace(find, replace);
    console.log(find, replace);
    setText(text);
  }

  const [text, setText] = useState('');

  return (
    <>
      <div className='container'>
        <div className="my-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
          <textarea className="form-control" id="userText" rows="8" value={text} onChange={onChangeHandle}></textarea>
        </div>
      </div>
      <div className='container'>
        <button disabled={text.length===0} type="button" className="btn btn-primary" onClick={handleUpperCase}>Uppercase</button>
        <button disabled={text.length===0} type="button" className="btn btn-secondary mx-3  my-2" onClick={handleLowerCase}>Lowercase</button>
        <button disabled={text.length===0} type="button" className="btn btn-success voice  my-2" onClick={speak}>Speak</button>
        <button disabled={text.length===0} type="button" className="btn btn-success mx-3  my-2" onClick={copyText}>Copy</button>
        <button disabled={text.length===0} type="button" className="btn btn-success mx-3  my-2" onClick={clearText}>Clear</button>
        <button disabled={text.length===0} type="buclass=tton" className="btn btn-danger mx-3  my-2" onClick={removeWhiteSpace}>Remove-space</button>
        <button disabled={text.length===0} type="button" className="btn btn-info my-2" onClick={replaceWord}>Replace</button>
      </div>
      <div className="container">
        <h1>Your text summary</h1>
        <p>{noOfWord()} words and {text.length} character</p>
      </div>
    </>
  )
}
