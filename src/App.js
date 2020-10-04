import React from 'react';
import Cookies from 'js-cookie';
import AppTeacher from './AppTeacher';
import AppStudent from './AppStudent';
import AppParent from './AppParent';
import SigninPage from './screens/SigninPage';

import Container from "@material-ui/core/Container";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  /* Not a real good idea to use cookies, but its a temp solution */
  const isLoggedIn = Cookies.get('isLoggedIn');
  const userType = Cookies.get('userType');

  return (
    <div>
    <main>

            <Router>
						<div>
							<Switch>
              <Route exact path="/">
									<SigninPage />
								</Route>
								<Route exact path="/teacher">
									<AppTeacher />
								</Route>
								<Route exact path="/student">
									<AppStudent />
								</Route>
								<Route exact path="/parent">
									<AppParent />
								</Route>
							</Switch>
						</div>
            </Router>
</main>
</div>
    // <div>
    //   {isLoggedIn
    //     ? (userType == "Teacher"
    //       ? <AppTeacher />
    //       : (userType == "Student" ? <AppStudent />: <AppParent />)
    //       )
    //     : <SigninPage />
    //   }
    // </div>
  );
};
