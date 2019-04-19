import React,{Component} from "react";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

class Menu extends Component{
    render(){
        return (
            <div id="mainMenu">
                <div className = 'itemMenu contactsMenu'>
                    <Link to="/contacts">
                        <FaUsers />
                        <span>Contacts</span>
                    </Link>                    
                </div>
                <div className = 'itemMenu mailingList'>
                    <Link to="/mailinglist">
                        <IoIosSend /> 
                        <span>Mailinglist</span>
                    </Link>                    
                </div>
                 
                
            </div>
        )
    }
        
}

export default Menu;