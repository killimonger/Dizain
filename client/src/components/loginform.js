import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
// import registerUser from '../utils/utilities/registerUser';

const registerUser = (e) => {
  e.preventDefault();
  console.log("World doesn't respond");
};
function Loginform({ setToggle }) {
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
      <label htmlFor="name">Nom d'utilisateur</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="lastname">Email</label>
      <input type="email" name="lastname" id="lastname" />
      <label htmlFor="password">Mot de passe</label>
      <input type="password" name="password" id="password" />
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
