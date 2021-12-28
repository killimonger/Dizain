import { Routes, Route, Outlet } from 'react-router-dom';
//Routes
import App from '../App';
import Home from '../containers/Home';
import ProcessLoad from '../containers/_loading';

function router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="register" element={<Outlet />} />
        <Route path="login" element={<Outlet />} />
        <Route path="c" element={<ProcessLoad />} />
      </Route>
      {/* <Route path="processload" element={<ProcessLoad />}>
        <Route path=":data" element={<Outlet />} />
      </Route> */}
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
