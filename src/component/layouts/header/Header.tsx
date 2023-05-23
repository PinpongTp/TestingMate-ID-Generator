import { NavLink } from 'react-router-dom';
import './header.scss';

export const Header = () => {
  return (
    <>
      <div className="header">
        <h1>TestingMate ID Generator</h1>
      </div>
      <div className="nav">
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/"
          id="randomBtn"
        >
          random
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="setting"
          id="settingBtn"
        >
          setting
        </NavLink>
      </div>
    </>
  );
};
