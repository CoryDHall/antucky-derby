type Ant = {
  name: string
  color: string
  weight: number
  length: number
  racesPending: number
  racesCompleted: number
  likelihood: number
}
type FinishLineCrossing = [string, number];
type Race = {
  startTime: number
  status: 'waiting' | 'in progress' | 'completed'
  endTime?: number
  finishLineOrder: FinishLineCrossing[]
}

type AppState = {
  ants: Ant[]
  races: Race[]
}
