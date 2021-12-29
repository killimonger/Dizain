import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { useNavigate, Outlet, Link } from 'react-router-dom';
import { useState } from 'react';

const axios = require('axios');

function Loginform({ setToggle }) {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  let navigate = useNavigate();
  let baseURL = 'http://localhost:5000/users';
  const registerUser = async (e) => {
    e.preventDefault();
    navigate(`/c/${email}${pwd}`, { replace: true });
    // https://reactrouter.com/docs/en/v6/getting-started/tutorial
    axios
      .get(baseURL)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log('Cannot get the server');
        console.log(err);
      });

    // let userData = {
    //   emailUser: email,
    //   pwdUser: pwd,
    // };
  };
  return (
    <form action="" method="POST" onSubmit={registerUser}>
      <h1>Se connecter</h1>
      <div className="orsignwith">
        <p>- ou -</p>
        <button className="sign-with-box swb-google">
          <FaGoogle className="sign-w-icon" />
          <span>Google</span>
        </button>
        <button className="sign-with-box swb-facebook">
          <FaFacebookF className="sign-w-icon" />
          <span>Facebook</span>
        </button>
      </div>
      <label htmlFor="lastname">Email</label>
      <input
        type="email"
        name="lastname"
        id="lastname"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label htmlFor="password">Mot de passe</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => {
          setPwd(e.target.value);
        }}
      />
      <button type="submit">
        <Outlet />
        Se connecter
        {/* <Link to="/processload">Se connecter</Link> */}
      </button>
      <p className="alreadyregistered">
        Je n'ai pas de compte,{' '}
        <Link
          to="/register"
          onClick={() => {
            setToggle();
          }}
        >
          m'inscrire
        </Link>
      </p>
    </form>
  );
}

export default Loginform;
