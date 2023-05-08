import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';

import MainPage from './views/MainPage/MainPage';
import ScreenerPage from './views/ScreenerPage/ScreenerPage';
import SettingsPage from './views/SettingsPage/SettingsPage';
import InterexchangePage from './views/InterexchangePage/InterexchangePage';
console.log('start');

export default function App() {
  console.log('APp');

  return (
    <div className="App">
      <BrowserRouter>
        <Main
          content={
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/screener" element={<ScreenerPage />} />
              <Route path="/interexchange" element={<InterexchangePage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          }
        />
      </BrowserRouter>
    </div>
  );
}
