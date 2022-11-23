import React ,{useState}  from 'react';
//import {useUndoRedo} from 'react';

//import { UseUndoRedo } from "Use-undo-redo"
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const TextForm = (props) => {

    
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const handlelowcase =()=>
    {
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleUpcase =()=>{
        // console.log("button was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");

    }
    const clearText =()=>
    {
            if(window.confirm(" Sure you want to clear Text??")===true){
                let newText = '';
                setText(newText);
                props.showAlert("Text Cleared","success");
            }
            else{
                setText(text);
            }

    }
    const handleCopy=()=>{
        let Text=document.getElementById("myBox");
        Text.select();
        navigator.clipboard.writeText(Text.value);
        props.showAlert("Text Copied","success");

    }
   const handleExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been Removed","success");

   }
//    function fun(){
//     var str=text
//     document.getElementById("italicc").innerHTML=str.italics();
//    }
    const [text,setText] = useState("");
    //fun();
  //  const [style,setstyle] = useState("");

    //const response = confirm("");
    
    // const [undo, redo] = useUndoRedo();
    return (
        <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
            {/* <label for="myBox" class="form-label">{props.heading}</label> */}
            <textarea placeholder="Start here.." className="form-control" value={text}  id="myBox" cols="10" onChange={handleOnChange} rows="5" style={{backgroundColor:props.mode==='dark'?'grey':'#cdf7dc',color:props.mode==='dark'?'white':'black',border:props.mode==='dark'?'3px solid white':'2px solid black'}} ></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleUpcase} >uppercase</button>
        <button className="btn btn-success mx-2" onClick={handlelowcase} >lowercase</button>
        <button className="btn btn-success mx-2" onClick={clearText} >ClearAll</button>
        <button className="btn btn-success mx-2" onClick={handleCopy} >Copy Text</button>
        <button className="btn btn-success mx-2" onClick={handleExtraSpace} >Remove Extra Spaces</button>
        {/* <button className="btn btn-success mx-2" onClick="fun()" id="italicc">Italic</button> */}

    </div>
            <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}} >
        <h2 >Your Text Summary </h2>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
    {/* style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} */}
    </>
    );
}

TextForm.propTypes = propTypes;
TextForm.defaultProps = defaultProps;
// #endregion

export default TextForm;

