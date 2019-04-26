import React,{Component} from "react";
import {Link } from "react-router-dom";
import myFetch from "../../../../tools/fetch"
import { Redirect } from 'react-router'
class Lists extends Component{
    state = {
        redirectToML:false
    }
    componentDidMount() {
        this.props.getMailingLists();
    }
    // uxarkel container funcer@ ...\/...
    delete = (ev) => {
        this.props.deleteEmailList(ev)
            .then(res=>{
                if(res.ok) {
                }
            })
// miajamanak state ev props poxvel@...
        
    }

    makeList = (lists) => {
        return lists.map(el=>{
            return (
                <li onClick = {this.props.onCklickOnListName}key={el.EmailListID} listid={el.EmailListID}>
                    <Link to={"/mailinglist/"+el.EmailListID}>{el.EmailListName}</Link>
                    <label action = "send" listid = {el.EmailListID} > Send </label>
                    <Link to="/mailinglist">
                        <label onClick={this.delete} action = "delete" listid = {el.EmailListID} > delete </label>
                    </Link>
                </li>
            )
        })
    }
    render(){
        let {error,lists,loading} = this.props;
        // console.log(this.props)
        if(error) {
            return <div>ERROR --- {error.message}</div>
        }

        if( loading && lists.length === 0) {
            return <div>Loading ...</div>
        }

        
        return(
            <div className="lists">
                <ul>
                    {this.makeList(lists)}
                </ul>
            </div>
        )
    }
}

export default Lists;

//shouldc-i mej hamematel imast ka te reactna anum ...?