import { Routes, Route } from 'react-router-dom';
//Routes
import App from '../App';
import Home from '../containers/Home';

function router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="register" />
        <Route path="login" />
      </Route>
      <Route path="/h" element={<Home />} />
      <Route
        path="*"
        element={
          <main>
            <h1>ERROR 404</h1>
            <br />
            <p>Il n'y a rien ici :)</p>
          </main>
        }
      />
    </Routes>
  );
}

export default router;
