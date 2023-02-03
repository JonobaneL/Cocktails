import React from "react";
import inputStyles from './cInput.module.css'

const CInput =(props)=>{
    return(
        <input className={inputStyles.customInput} {...props} />
    )
}

export default CInput;