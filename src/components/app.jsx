import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import Create from "./add";
import trauncated from "../data";
import { useState } from "react";


function App(){
    let [notes , SetNotes] = useState([])
    function addNote(note){
        SetNotes(prevValues =>{
            return ([...prevValues, note]);
        })
        
    }
    function deletenote(Key){
        console.log(Key);
        SetNotes((prevValues )=>{
                let arr = prevValues.filter((noteItem,index)=>{
                return index !== Key
            })
            return arr;
            
            
        })
    }
    
    return(
    <div className="content">
        <div className="headerKeeper">
            <Header></Header>
        </div>
        <Create
        onAdd={addNote}
        ></Create>
        <div className="noteContent row row-cols-lg-3 row-cols-md-3">
            
            {notes.map((data,index)=>{
                    return(
                    <a href="#" className="linkfull">
                        <div className="col item">
                                
                                <Note
                                Key = {index}
                                name = {data.title}
                                value = {trauncated(data)}
                                delNote = {deletenote}
                                ></Note>
                            
                        </div>
                    </a>)
                })}
            
        </div>
          
        <div className="footerKeeper">
            <Footer></Footer>
        </div>
    </div>
    );
}
export default App;