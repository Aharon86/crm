import React,{Component} from "react";
import Menu from "./menu";
import Wrapper from "./wrapper";
import { BrowserRouter as Router, Link } from "react-router-dom";
import '../styles/index.sass';
import logo from '../styles/images/logo32.png';
import AddContactPopup from '../reusableComponents/AddContactPopup';
import DeletingPopup from '../reusableComponents/DeletingPopup';
import { connect } from 'react-redux';
import EditingContactPopup from '../reusableComponents/EditingContactPopup';
import CreateMailingList from '../reusableComponents/CreateMailingList';
import Indicator from "../reusableComponents/indicator";
import SubmitPopup from "../reusableComponents/SubmitPopup"
import AddToExistingList from "../reusableComponents/AddToExistingListPopup";
import EmailSendPopup from '../reusableComponents/emailSendPopup';
import UploadFilePopup from '../reusableComponents/UploadFilePopup';

class App extends Component{

    render(){
        const { creatingEmailListPopupIsOpen, 
                addToExistingListIsOpen,
                addNewContactIsOpen,
                uploadFileIsOpen, 
                deletingPopupIsOpen
                } = this.props.openPopups;
        const { editPopupIsOpen } = this.props.editingContactPopup;
        // const {bgColor,isOpen,text} = this.props.indicator;
        const {isOpen} = this.props.submitPopup
        const {specClass,text} = this.props.indicator;
        const isOpenIndicator = this.props.indicator.isOpen
        const {isOpenSendEmailPopup} = this.props;
        return (
            <Router>
                <div className="main">
                    <div className="header">
                        <div className = 'size'>
                            <div id = 'logo'>
                                <Link to="/contacts">
                                    <img src = {logo} alt = 'logo'/>
                                </Link>
                            </div>
                            <h1>C<span>ustomer</span> R<span>elationship</span> M<span>anagement</span></h1>
                        </div>
                    </div>
                    <section>
                        <Menu />
                        <div id = 'container'>
                            <Wrapper />  
                        </div>
                    </section>
                </div>
                { addNewContactIsOpen ? < AddContactPopup />: null }
                { uploadFileIsOpen ? < UploadFilePopup />: null }
                { creatingEmailListPopupIsOpen ? < CreateMailingList />: null}
                { addToExistingListIsOpen ? < AddToExistingList />: null}
                { deletingPopupIsOpen ? < DeletingPopup />: null }
                { editPopupIsOpen ? < EditingContactPopup />: null}
                { isOpen ? <SubmitPopup /> : null }
                { isOpenIndicator ?<Indicator specClass = {specClass} text = {text}/> : null}
                { isOpenSendEmailPopup ? <EmailSendPopup/> : null }
            
            </Router>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        openPopups: state.openPopups,
        editingContactPopup: state.editingContactPopup,
        indicator: state.indicator,
        submitPopup: state.submitPopup,
        isOpenSendEmailPopup: state.sendEmailPopup.isOpen
    }
}


export default connect(mapStateToProps)(App);