import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text Coverted in UpperCase","success")
    }
    const handleLwClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text Coverted in LowerCase","success")
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared","success")
    }
    const handleCopyClick = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied To Clipbord","success")
    }
    const handleSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed","success")

    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text,setText]=useState("");
    return (
        <>
        <div className="container" style={{color:props.mode==='light'?'black':'white'}}>

            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value ={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className=" btn btn-danger mx-2 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
            <button disabled={text.length===0} className=" btn btn-info mx-2 my-1" onClick={handleLwClick}>Convert To LowerCase</button>
            <button disabled={text.length===0} className=" btn btn-info mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className=" btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy Text</button>
            <button disabled={text.length===0} className=" btn btn-primary mx-2 my-1" onClick={handleSpace}>Remove Extra Space</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter text above box "}</p>
        </div>
         </>
    )
}

