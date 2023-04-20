import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';

import MainPage from './views/MainPage/MainPage';
import ScreenerPage from './views/ScreenerPage/ScreenerPage';
import SettingsPage from './views/SettingsPage/SettingsPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Main
          content={
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/screener" element={<ScreenerPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          }
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
