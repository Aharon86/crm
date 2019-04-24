import React,{Component} from "react";
import {connect} from "react-redux";
import {getTemplates} from "../myRedux/actions/templatesActions/getTemplatesAction"
import {closeSendEmailPopup} from "../myRedux/actions/sendEmailPopupActions/sendEmailPopupActions";
import myFetch from "../tools/fetch"



class emailSendPopup extends Component {
    state = {
        choosedTemplate: null
    } 
    componentDidMount() {
        this.props.getTemplates();
    }
    makeUrl = () => {
        // console.log(this.props.sendEmailPopup);
        const mailingListId = this.props.sendEmailPopup.mailingListId;
        const templateId = this.state.choosedTemplate
        let url = "";
        if(mailingListId) {
            url = `/sendemails?template=${templateId}&emaillistId=${mailingListId}`;
        } else {
            url = `/sendemails?template=${templateId}`;
        }
        return url;
    }
    selectTemplate = (ev) => {
        if(!ev.target.getAttribute("teminmp")) {
            return
        }
        this.setState({
            choosedTemplate:ev.target.value
        })
    }
    makeTemaplesList = list => {
        // console.log(list)
        return list.map(el => {
            return (
            <div onClick = {this.selectTemplate} key = {el.TemplateId} >
                <input 
                    name="temapltesRadio"
                    teminmp = "true"
                    type="radio"
                    value={el.TemplateId}
                    id={"template"+el.TemplateId}/>    
                <label teminmp = "true" value={el.TemplateId} htmlFor ={"template"+el.TemplateId}>{el.TemplateName}</label>  
            </div>)
        })
    }
    send = () => {
        myFetch(this.makeUrl(),"POST",this.props.sendEmailPopup.GuIDArr)
        .then(aa=>console.log(aa))
        .catch(err=>console.log(err))
    }
    render() {
        // console.log(this.props.st)
        const {error,loading,templates} = this.props.templates
        if(error) {
            return <div>ERROR --- {error.message}</div>
        }

        if( loading) {
            return (
            <div className = 'popupWrap'>
                <div className = 'popupContent'>
                    <div className = 'popupSize'> 
                        <div>LOADING ...</div>
                    </div>
                </div>
             </div>
            )
        }
        return (
            <div className = 'popupWrap'>
                <div className = 'popupContent'>
                    <div className = 'popupSize'>      
                        {this.makeTemaplesList(templates)}       
                        <div className = 'popupButtons'>     
                            <button onClick = {this.send}>send</button>                   
                            <button onClick = {this.props.closePopup}>Close</button>
                            {/* <button onClick = { this.sendContact }>Add</button>
                            <button onClick = { this.cancel }>Cancel</button> */}
                        </div>
                    </div>
                </div>
            </div>
            // <div id = "emailSendPopup" className = "popup">
            //     {makeTemaplesList(props.temaplesList)}
            // </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        st: state,
        sendEmailPopup:state.sendEmailPopup,
        templates: state.templates
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closePopup: () => {
            dispatch(closeSendEmailPopup())
        },
        getTemplates:()=>{
            dispatch(getTemplates())
        }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(emailSendPopup);
// petqa vercni templatesner@, @ntri, sargi silken -->...

// zamikaniya classov OKa ?