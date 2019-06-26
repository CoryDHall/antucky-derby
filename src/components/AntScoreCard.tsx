import React from "react";
import './AntScoreCard.css';

type AntScoreCardProps = {
  ant: Ant
}
export const AntScoreCard = ({ant}: AntScoreCardProps) => {
  return (
    <div className="AntScoreCard" style={{borderLeftColor: ant.color}}>
      <h2 className="AntScoreCard_Name">{ant.name}</h2>
      <div className="AntScoreCard_Stats">
        <div className="AntScoreCard_Stat">
          Scheduled:
          <span className="AntScoreCard_StatValue">{ant.racesPending}</span>
        </div>
        <div className="AntScoreCard_Stat">
          Completed:
          <span className="AntScoreCard_StatValue">{ant.racesCompleted}</span>
        </div>
        <div className="AntScoreCard_Stat">
          Odds:
          <span className="AntScoreCard_StatValue">{ant.likelihood ? ant.likelihood.toFixed(3) : 'N/A'}</span>
        </div>
      </div>
      <div className="AntScoreCard_Stats">
        <div className="AntScoreCard_Stat">
          Length:
          <span className="AntScoreCard_StatValue">{ant.length}</span>
        </div>
        <div className="AntScoreCard_Stat">
          Color:
          <span className="AntScoreCard_StatValue">{ant.color}</span>
        </div>
        <div className="AntScoreCard_Stat">
          Weight:
          <span className="AntScoreCard_StatValue">{ant.weight}</span>
        </div>
      </div>
    </div>
  )
}
