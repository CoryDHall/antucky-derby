import React from 'react';
import './App.css';
import { AntList } from './components/AntList';
import { AntInfo } from './components/AntInfo';
import { RaceTrigger } from './components/RaceTrigger';
import { RaceResult } from './components/RaceResult';

const App: React.FC = () => {
  return (
    <div className="App">
      <AntList />
      <AntInfo/>
      <RaceTrigger/>
      <RaceResult/>
    </div>
  );
}

export default App;
