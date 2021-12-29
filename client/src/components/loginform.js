import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { useNavigate, Outlet, Link } from 'react-router-dom';
import { useState } from 'react';

const axios = require('axios');

function Loginform({ setToggle }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  let navigate = useNavigate();
  let baseURL = 'http://localhost:5000/users';
  const registerUser = async (e) => {
    e.preventDefault();
    navigate(`/c`, { replace: true });
    // https://reactrouter.com/docs/en/v6/getting-started/tutorial
    axios
      .post(`${baseURL}/n`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: pwd,
      })
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
    <form action="" onSubmit={registerUser}>
      <h1>S'inscrire</h1>
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
      <label htmlFor="firstName">Nom</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <label htmlFor="lastName">Prénom</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
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
        S'inscrire
        {/* <Link to="/processload">S'inscrire</Link> */}
      </button>
      <p className="alreadyregistered">
        J'ai déjà un compte,{' '}
        <Link
          to="/login"
          onClick={() => {
            setToggle();
          }}
        >
          me connecter
        </Link>
      </p>
    </form>
  );
}

export default Loginform;
