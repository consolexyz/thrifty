import react from "react";
import MenuItem from "../menuitem/MenuItem";
import Data from "./directory.data";
import './directory-style.scss';

const menuitem = Data.map(data => <MenuItem key ={data.id} title={data.title} imageUrl= {data.imageUrl} size={data.size}/>)

const Directory = () => 
  
(
    <div className="directory-menu">
        {menuitem}
    </div>
)

export default  Directory