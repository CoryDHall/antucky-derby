import ACTIONS from "./actionTypes";

const initialState: AppState = {
  ants: [],
  races: []
}

function findRace(races: Race[], raceStartTime: number) {
  const currentRaceId = races.findIndex(race => race.startTime === raceStartTime);

  return races[currentRaceId];
}

function findAnt(ants: Ant[], name: string) {
  const currentAntId = ants.findIndex(ant => ant.name === name);

  return ants[currentAntId];
}

export function antStatsReducer(state = initialState, action: { type: any; payload: any; }) {
  const races = [...state.races];
  const ants = [...state.ants];
  let currentRace: Race;
  let currentAnt: Ant;

  switch (action.type) {
    case ACTIONS.UPDATE_ANTS:
    return {
      ...state,
      ants: [
        ...state.ants,
        ...action.payload.ants,
      ]
    }
    case ACTIONS.START_TEST:
      currentRace = findRace(races, action.payload.raceStartTime);

      if (!currentRace) return state;
      currentRace.status = 'in progress';
      action.payload.raceAction();

      return {
        ...state,
        ants,
        races
      }

    case ACTIONS.UPDATE_TEST_RESULT:
      currentRace = findRace(races, action.payload.raceStartTime);
      currentAnt = findAnt(ants, action.payload.ant.name)

      if (!currentRace) return state;

      currentRace.endTime = Date.now();
      currentRace.finishLineOrder.push([currentAnt.name, action.payload.likelihood])
      if (currentAnt) {
        currentAnt.racesPending--;
        const totalLikelihood = currentAnt.likelihood * currentAnt.racesCompleted;
        currentAnt.racesCompleted++;
        currentAnt.likelihood = (totalLikelihood + action.payload.likelihood) / currentAnt.racesCompleted
      }
      if (currentRace.finishLineOrder.length === state.ants.length) {
        currentRace.status = 'completed';
      }

      return {
        ...state,
        ants,
        races
      }
    case ACTIONS.MAKE_NEW_TEST:
      const newRace: Race = {
        startTime: Date.now(),
        status: 'waiting',
        finishLineOrder: []
      }
      ants.map(ant => ant.racesPending++)

      return {
        ...state,
        ants,
        races: [...state.races, newRace]
      }
    default:
      return state;
  }
}
