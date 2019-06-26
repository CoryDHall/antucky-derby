import React from "react";
import { connect } from "react-redux";
import { AntScoreCard } from "./AntScoreCard";
import './AntInfo.css';

const AntInfoView = ({ants}: {ants: Ant[]}) => {
  return (
    <div className="AntInfo">
    {ants.map(ant => (<AntScoreCard ant={ant} key={ant.name}/>))}
    </div>
  )
}

export const AntInfo = connect(({ants}: AppState) => {
  return { ants: ants.sort((a, b) => b.likelihood - a.likelihood) }
})(AntInfoView)
