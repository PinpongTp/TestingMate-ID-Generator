import { Routes, Route, Link, NavLink, Navigate } from 'react-router-dom';
import './style/App.scss';
import { Random } from './pages/random/Random';
import { Setting } from './pages/setting/Setting';
import { Header } from './component/layouts/header/Header';

function App() {
  return (
    <div id="app">
      <Header />
      <div className="context">
        <Routes>
          <Route path="/" element={<Random />} />
          <Route path="setting" element={<Setting />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
