import React from 'react';
import './index.css';
import { PomodoroTimer } from './components/pomodoro-timer'

function App(): JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer
      pomodoroTime={10}
      shortRestTime={5}
      longRestTime={7}
      cycles={4} />
    </div>
  );
}

export default App;
