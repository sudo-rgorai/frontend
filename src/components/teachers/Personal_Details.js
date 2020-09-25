import  React, {Component} from 'react';
import styles from "./styles.css";

export default function Personal_Details(){
    return(
        <div className="layout">    
            <div className="container">
                <div className="row-offcanvas row-offcanvas-left">
                    <div className="dashboard-container-main">
                        <div className="dashboard">
                            <header className="push-bottom">
                                <h3 className="dashboard-title">
                                    Profile: 
                                    Vaibhav Singh        
                                </h3>
                            </header>
                            <div className="_container">
                                <ul className="nav nav-tabs push-bottom nav-tabs-custom" role="tablist">
                                    <li role="presentation" className="">
                                        <a href="#" aria-controls="basic-information" role="tab" data-toggle="tab" aria-expanded="true">Basic information</a>
                                    </li>
                                    <li role="presentation" className="active">
                                        <a href="#" aria-controls="detailsTab" role="tab" data-toggle="tab" aria-expanded="false">Personal details</a>
                                    </li>
							        <li role="presentation" className="">
					                    <a href="#" aria-controls="passwordTab" role="tab" data-toggle="tab" aria-expanded="false">Change password</a>
				                    </li>
                                </ul>
    
                                <div className="form_container">
                                    <div className="form_status" style={{display:'none'}}>
                                        <div className="_content">
                                        </div>
                                    </div>
                                    <form id="userForm" action="#" method="post" role="form" className="tab-content-box personal-form" data-toggle="validator" data-show_flash="true" autocomplete="off" novalidate="novalidate">
            
                                    <div className="tab-content">
                                        <div role="tabpanel" className="tab-pane" id="detailsTab">
                                            <h4 className="dashboard-subtitle">
                                                Personal details                    
                                            </h4>
                                            <div className="row">
                                                <div className="col-md-8">
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <label for="birthdate_picker" className="control-label">Birth date                                                                                </label>
                                                                <input type="text" name="meta[birthdate]" id="birthdate_picker" className="form-control" placeholder="" value="" />
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <label for="tel" className="control-label">Phone number                                                                                </label>
                                                                <input type="tel" className="form-control" id="tel" name="meta[telephone]" value="" />
                                                                <input type="hidden" id="check_phone_validation" value="3" />
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <label for="city" className="control-label">
                                                                    City                                                                                    
                                                                </label>
                                                                <input type="text" className="form-control" id="city" name="meta[city]" value="" />
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <label for="zip" className="control-label">
                                                                    Zip code
                                                                </label>
                                                                <input type="text" pattern="/([0-9])\w+/g" className="form-control" id="zip" name="meta[zipcode]" value="" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label for="addr" className="control-label">Address</label>
                                                        <textarea id="addr" className="form-control" rows="2" name="meta[address]"></textarea>
                                                    </div>

                                                    <div className="form-group hidden-best">
                                                        <label for="additional_info" className="control-label">Additional info</label>
                                                        <textarea type="text" className="form-control" rows="4" id="additional_info" name="user[additional_info]"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );                      
}                       