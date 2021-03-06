import "./styles.css";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css"; // import styles
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/tooltip";
import "bootstrap/dist/css/bootstrap.css";

import React, { useState } from 'react';
import { event } from "jquery";
 function App() {
 function onChange(e) {
    const text=document.querySelector(".note-editable").textContent;
    console.log(text);
   e.preventDefault(); 
  };
  return (
    <div>
     
    
    <ReactSummernote
      value="Default value"
      options={{
        height: 350,
        
        dialogsInBody: true,
        toolbar: [
          ["style", ["style"]],
          ["font", ["bold", "underline", "clear"]],
          ["fontname", ["fontname"]],
          ["para", ["ul", "ol", "paragraph"]],
          ["table", ["table"]],
          ["insert", ["link", "picture", "video"]],
          ["view", ["fullscreen", "codeview"]]
        ]
      }}
      //  onChange={this.onChange}
      
    />
     <input class="button" type="button" onClick={onChange} value="BUTTON" />
    </div>
  );
}
export default App