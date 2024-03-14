import React, {useState} from 'react'


export default function Form(props) {


    const [text, setText] = useState("");
     const upperCase = ()=>{
      const newText = text.toUpperCase();
      setText(newText);
     }

     const handleClick =(e)=>{

      setText(e.target.value);

     }
     const lowerCase=()=>{
      const lowCase = text.toLowerCase();
      setText(lowCase);

     }
     const cleanText=()=>{
      const clearText = " ";
      setText(clearText);

     }

     const extraSpaces= ()=>{
      let extra = text.split(/[ ]+/);
      setText(extra.join(" "))

     }




  return (
    
<>
     <div>
<div className="mb-3 my-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"><h3>TextUtils | Enter Your Text</h3></label>
  <textarea placeholder='Enter your text here' className="form-control" value={text} onChange={handleClick} id="exampleFormControlTextarea1" rows="8"></textarea>
  <button onClick={upperCase}  type="button" className="btn btn-primary my-2 ">Upper case</button>
  <button onClick={lowerCase}  type='button' className='btn btn-danger mx-2'>lower Case</button>
  <button onClick={cleanText} type='button' className="btn btn-secondary">Clear Text</button>
  <button onClick={extraSpaces} type='button' className="btn btn-warning mx-2">Remove Extra Spaces</button>

  
</div>
      
    <div className='container my-3'>
      <h2>Text Summary</h2>
      <b>Words {text.split(" ").length} Characters {text.length}</b>


      <p>{0.008 * text.split(" ").length }   Minutes Read</p>
      <h2>Preview</h2>
      <p>{text}</p>


    </div>
    </div>
    </>
  )
}
