import React, { useState } from "react";
import styles from './Filters.module.css'
import CInput from "../UI/input/cInput";
import findIcon from '../../images/search-icon.png'

const Filters =({search,setSearch,getData})=>{
    // const [c, setC] = useState('')
    return(
        <div className={styles.filter}>
            <CInput value={search} onChange={e=>setSearch(e.target.value)} />
            <button className={styles.findButton} onClick={getData()}><img src={findIcon} alt="Find" /></button>
        </div>
    )
}
export default Filters;