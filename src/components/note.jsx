import React from "react";

function Note(props){
    function handleDelete(){
        props.delNote(props.Key)
        }
    return(
    <div className="note" id={props.Key}>
        <div className="Title">
            <h3>{props.name}</h3>
        </div>
        <div className="Description">
            <p>{props.value}</p>
        </div>
        <div className="button">
            <button value={props.Key} onClick={handleDelete}>Delete Note</button>
        </div>
    </div>
    );
}
export default Note;