

function trauncated(notes){
    let truncatedDes = (notes.des.substring(0,150));
    
    return truncatedDes;
}

export default trauncated ;