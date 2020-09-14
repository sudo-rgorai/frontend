import React from 'react';
import Cookies from 'js-cookie';
import AppTeacher from './AppTeacher';
import AppStudent from './AppStudent';
import AppParent from './AppParent';
import SigninPage from './screens/SigninPage';

export default function App() {
  /* Not a real good idea to use cookies, but its a temp solution */
  const isLoggedIn = Cookies.get('isLoggedIn');
  const userType = Cookies.get('userType');

  return (
    <AppParent />
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
