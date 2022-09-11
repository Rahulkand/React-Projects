import { prettyDOM } from "@testing-library/react";
import React ,{useState}from "react";
import datas from "../data";

function Create(props){
    let [item , setItem] = useState({
        title : "",
        des: "",
    });
    function handlechange(event){
        const newValue =  event.target.value;
        const inputfrom = event.target.name;
        setItem((prevValue) =>{
            
            return({
                ...prevValue,
                [inputfrom] : newValue,
            }
            );
        })
    }
    function handleclick(event){
        props.onAdd(item);
        setItem({
            title : "",
            des : ""
        })

        event.preventDefault();

    }
    return(
        <form>
        <div className="create">
            <div className="stylebox">
                <div className="Heading">
                    <input type="text" placeholder="Title" className="title" name="title"onChange={handlechange} value={item.title}></input>
                </div>
                <div className="description">
                    <textarea rows="5" col="30" type="text" placeholder="Enter a note" className="notec" name="des" onChange={handlechange} value={item.des}/>
                </div>
                <div className="bt">
                    <button onClick={handleclick}>+</button>
                </div>
            </div>
        </div>
        </form>
    );
}
export default Create;