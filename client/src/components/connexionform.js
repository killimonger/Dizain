import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function loginform({ setToggle }) {
  return (
    <form action="">
      <h1>Se connecter</h1>
      <label htmlFor="lastname">Email</label>
      <input type="email" name="lastname" id="lastname" />
      <label htmlFor="password">Mot de passe</label>
      <input type="password" name="password" id="password" />
      <button type="submit">Se connecter</button>
      <div className="orsignwith">
        <p>ou se connecter avec</p>
        <FaGoogle className="sign-w-icon" />
        <FaFacebookF className="sign-w-icon" />
      </div>
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

export default loginform;
