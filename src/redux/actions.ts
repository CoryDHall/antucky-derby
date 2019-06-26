import ACTIONS from "./actionTypes";

export const updateAnts = (...ants: Ant[]) => {
  return ({
    type: ACTIONS.UPDATE_ANTS,
    payload: { ants }
  })
}

export const startRaces = () => {
  return ({
    type: ACTIONS.MAKE_NEW_TEST
  })
}

export const updateRaceResult = (ant: Ant, likelihood: number, raceStartTime: number) => {
  return ({
    type: ACTIONS.UPDATE_TEST_RESULT,
    payload: {ant, likelihood, raceStartTime}
  })
}

export const startRace = (raceStartTime: number, raceAction: () => void) => {
  return ({
    type: ACTIONS.START_TEST,
    payload: {raceStartTime, raceAction}
  })
}
