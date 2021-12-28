// Assets
import '../assets/styles/login.css';
import illustration from '../assets/imgs/login-background.png';
//Components
import SignInForm from '../components/connexionform';
import SignUpForm from '../components/loginform';
// Utils
import userIsLoggedIn from '../utils/utilities/userIsLoggedIn';
import { useState } from 'react';

function Login() {
  const [toggleLogin, setToggleLogin] = useState(true);
  const setToggle = () => {
    setToggleLogin(!toggleLogin);
  };
  return (
    <div className="container">
      {userIsLoggedIn()}
      <div className="container-login">
        <img src={illustration} alt="Logo" className="illustration" />

        <div className="loginform">
          {toggleLogin ? (
            <SignInForm setToggle={setToggle} />
          ) : (
            <SignUpForm setToggle={setToggle} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
