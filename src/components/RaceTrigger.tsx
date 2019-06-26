import React from 'react';
import { startRaces } from '../redux/actions';
import { connect } from 'react-redux';
import './RaceTrigger.css'

type RaceTriggerProps = {
  startRaces: typeof startRaces
}

const RaceTriggerView = ({startRaces}: RaceTriggerProps) => {
  return (
    <button onClick={startRaces} className="RaceTrigger">
      Start new Race
    </button>
  );
};

export const RaceTrigger = connect(null, { startRaces })(RaceTriggerView)
