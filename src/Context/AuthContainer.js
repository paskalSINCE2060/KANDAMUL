import React, { useState } from "react";
import Login from "../Components/LoginSignup/Login";
import SignUp from "../Components/LoginSignup/SignUp";

const AuthContainer = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);

  // Functions to toggle between login and signup
  const navigateToSignup = () => setIsLoginPage(false);
  const navigateToLogin = () => setIsLoginPage(true);

  return (
    <div>
      {isLoginPage ? (
        <Login navigateToSignup={navigateToSignup} />
      ) : (
        <SignUp navigateToLogin={navigateToLogin} />
      )}
    </div>
  );
};

export default AuthContainer;
