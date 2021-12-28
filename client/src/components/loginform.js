import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
// import registerUser from '../utils/utilities/registerUser';
function registerUser(e) {
  e.preventDefault();
  console.log("World doesn't respond");
}

function loginform({ setToggle }) {
  return (
    <form action="" onSubmit={registerUser}>
      <h1>S'inscrire</h1>
      <label htmlFor="name">Nom d'utilisateur</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="lastname">Email</label>
      <input type="email" name="lastname" id="lastname" />
      <label htmlFor="password">Mot de passe</label>
      <input type="password" name="password" id="password" />
      <button type="submit">S'inscrire</button>
      <div className="orsignwith">
        <p>ou s'inscrire avec</p>
        <FaGoogle className="sign-w-icon" />
        <FaFacebookF className="sign-w-icon" />
      </div>
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

export default loginform;
