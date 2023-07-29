import React, {useState} from 'react'

export default function Text(props) {
const handleUpClick = ()=>{
    console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    settext(newText);
    props.show('Converted to Uppercase','primary');
}
const handleLoClick = ()=>{
  console.log("Lowercase was clicked" + text);
  let newText = text.toLowerCase();
  settext(newText);
  props.show('Converted to lowercase','success');
}

const handleClear = ()=>{
  console.log("Clear was clicked" + text);
  let newText = ''
  settext(newText)      
}

const extractEmails = () => {
  return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
}

const extraSpaces = ()=> {
  let newText=text.split(/[ ]+/);
  settext(newText.join(' ')) 
}
const copyText = ()=>{
  var text = document.getElementById('mybox')
  text.select();
  navigator.clipboard.writeText(text.value);
  props.show('Text is copied','success');
}
const handleOnChange = (event)=>{
    console.log("On Change");
    settext(event.target.value)
}
    const[text,settext]=useState('');

    return (
    <div style={{backgroundColor: props.mode==='dark'?'black':'white'}}>
      <div className="container my-4" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'black':'white'}}>
        <h1>{props.heading}</h1>
  <textarea className="form-control"  value={text} onChange={handleOnChange} style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'grey':'white'}}  id="mybox" rows="7"></textarea>
<button className='btn btn-primary mx-2 my-3' onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-success mx-2 my-3' onClick={handleLoClick}>Convert to Lowercase</button>
<button className='btn btn-danger mx-2 my-3' onClick={handleClear}>Clear</button>
<button className='btn btn-secondary mx-2 my-3' onClick={extractEmails}>Get Emails</button>
<button className='btn btn-info mx-2 my-3' onClick={extraSpaces}>Remove extra spaces</button>
<button className='btn btn-dark mx-2 my-3' onClick={copyText}>Copy Text</button>
</div>
<div className="container" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'black':'white'}}>
  <h1>Text Summary</h1>
  <p>{text.split(" ").length} words and {text.length} characters </p>
<p>{0.008 * text.split(" ").length } minutes time to read text</p>
<h2>Perview Text</h2>
<p>{text.length>0?text:'Enter something in the text box to perview it'}</p>
<p>Emails: {extractEmails()} </p>
</div>
</div>
  )
}
