import React from 'react';
import { generateAntWinLikelihoodCalculator } from '../generateAntWinLikelihoodCalculator';
import { connect } from 'react-redux';
import { updateRaceResult, startRace } from '../redux/actions';
import './RaceResult.css';
import { timeFormat } from '../utils';

type RaceResultProps = {
  races: Race[],
  ants: Ant[],
  updateRaceResult: typeof updateRaceResult
  startRace: typeof startRace
}

const RaceParticipant = ([antName, likelihood]: [string, number], i: number) => {
  return (
    <li key={antName} className="RaceResultList_Item">
    {i+1}: <em>{antName}</em> <b>{likelihood.toFixed(2)}</b>
    </li>
  );
}

const RaceResultItem = ({startTime, endTime, finishLineOrder, status}: Race) => {
  return (
    <div className="RaceResult" key={startTime}>
      {status}:{timeFormat(startTime)}-{timeFormat(endTime)}
      <ol className="RaceResultList">
        {finishLineOrder.sort((a, b) => b[1] - a[1]).map(RaceParticipant)}
      </ol>
    </div>
  )
}

const RaceResultView = ({races, ants, updateRaceResult, startRace}: RaceResultProps) => {
  if (!races.some(race => race.status === 'in progress')) {
    const currentRace = races.find(race => race.status === 'waiting');

    if (currentRace) startRace(currentRace.startTime, () => {
      ants.forEach(ant => {
        generateAntWinLikelihoodCalculator()(likelihood => {
          updateRaceResult(ant, likelihood, currentRace.startTime)
        })
      })
    })

  }

  return (
    <div className="RaceResults">
      {races.sort((a, b) => {
        if (a.status === 'waiting') return a.startTime;
        else return b.startTime - a.startTime;
      }).map(RaceResultItem)}
    </div>
  )
}

const stateToProps = ({races, ants}: AppState) => {
  return {races, ants}
}

export const RaceResult = connect(stateToProps, {
  updateRaceResult,
  startRace
})(RaceResultView)
