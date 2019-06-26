import React from "react";
import { connect } from "react-redux";
import { updateAnts } from "../redux/actions";

type updateFn = typeof updateAnts;
type AntProps = {
  updateAnts: updateFn
  data: Ant
}

export function AntView({ updateAnts, data }: AntProps) {
  updateAnts(data)
  return null;
}

export const AntItem = connect(null, {updateAnts})(AntView)
