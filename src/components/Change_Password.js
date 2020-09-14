import  React, {Component} from 'react';
import styles from "./styles.css";

export default function Change_Paddword(){
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
                                    <li role="presentation" className="">
                                        <a href="#" aria-controls="detailsTab" role="tab" data-toggle="tab" aria-expanded="false">Personal details</a>
                                    </li>
							        <li role="presentation" className="active">
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
                                        <div role="tabpanel" className="tab-pane" id="passwordTab">
					                        <h4 className="dashboard-subtitle">
					                        	Change password						
                                            </h4>
					                        <div className="row">
					                        	<div className="col-sm-8 col-md-6">
					                        		<div className="form-group">
					                        			<label for="new_password" className="control-label">New password</label>
					                        				<input type="password" className="form-control" name="user[new_password]" id="new_password" />
					                        			</div>
					                        			<div className="form-group">
					                        				<label for="re_password" className="control-label">Confirm new password</label>
					                        				<input type="password" className="form-control" name="user[re_password]" id="re_password" />
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