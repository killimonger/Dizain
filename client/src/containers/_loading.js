import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Data from '../components/Data';
import '../assets/styles/loader.css';
function _loading() {
  return (
    <div className="contain">
      <div className="loader"></div>
      {/* <Data /> */}
      {/* <Outlet /> */}
    </div>
  );
}

export default _loading;
