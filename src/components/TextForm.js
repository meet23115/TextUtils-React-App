import React, { useState } from "react";

export default function TextForm(props) {

    const handleOnChange = (event) =>{
        // console.log("handleOnChange Clicked");
        setText(event.target.value);
    }

    const handleUpperCase = () =>{
        // console.log("handleUpClick Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleLowerCase = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleCapitalCase = () =>{
        let tempText = text.toLowerCase().split(' ');
        for (var i = 0; i < tempText.length; i++) {
            tempText[i] = tempText[i].charAt(0).toUpperCase() + tempText[i].slice(1); 
        }
        let newText =  tempText.join(' ');
        setText(newText);
        props.showAlert("Converted to Capitalcase", "success");
    }

    const handleCopy = () =>{
        let copyTextext = document.getElementById("myBox");
        copyTextext.select();
        copyTextext.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(copyTextext.value);
        props.showAlert("Text has been copied to clipboard", "success");
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Successfully removed extra spaces", "success");
    }

    const handleReset = () =>{
        // console.log("handleReset Clicked");
        let newText = "";
        setText(newText);
        props.showAlert("Cleared all text", "success");
    }


    // const wordCounter = () =>{
    //     const temp = text.slice(-1);
    //     if(temp === " "){
    //         var wordCount = text.split(" ").length - 1;
    //     }
    // }

    const [text, setText] = useState("");
    
    return (
        <>
        <div>
            <h1 style={{color: props.mode==="light" ? "#000000" : "#ffffff"}}>
                {props.heading}
            </h1>
            <div className="mb-3">
                <textarea placeholder="Start typing..." className="form-control" style={{backgroundColor: props.mode==="light" ? "#ffffff" : "#464648", color: props.mode==="light" ? "#000000" : "#ffffff"}} id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpperCase}>Upper Case</button>
            <button className="btn btn-primary mx-2" onClick={handleLowerCase}>Lower Case</button>
            <button className="btn btn-primary mx-2" onClick={handleCapitalCase}>Capital Case</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick={handleReset}>Clear</button>
        </div>
        <div className="container my-3" style={{color: props.mode==="light" ? "#000000" : "#ffffff"}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} Words and {text.length} Characters.</p>
            <p>You need approx {0.008 * text.split(" ").length} minutes to read.</p>
            <h2>Preview</h2>
            <p className="form-control" rows="8" style={{backgroundColor: props.mode==="light" ? "#ffffff" : "#464648", color: props.mode==="light" ? "#000000" : "#ffffff"}}>{text.length>0 ? text : "Enter your text in the above text box to preview here"}</p>
        </div>
        </>
    );
}
