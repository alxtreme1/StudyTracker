import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import StudySession from './pages/StudySession';
import ErrorLog from './pages/ErrorLog';
import GoalSetting from './pages/GoalSetting';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/study-sessions" element={<StudySession />} />
        <Route path="/error-log" element={<ErrorLog />} />
        <Route path="/goal-setting" element={<GoalSetting />} />
      </Routes>
    </Router>
  );
};

export default App;