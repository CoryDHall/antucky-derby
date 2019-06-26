import React from "react";
import { Query, QueryResult } from "react-apollo";
import { GET_ANTS } from "../queries";
import { updateAnts } from "../redux/actions";
import { connect } from "react-redux";
type AntResponse = {
  data: {
    ants: Array<Ant>
  }
} & QueryResult
type updateFn = typeof updateAnts;
const AntQuery = ({updateAnts}: {updateAnts: updateFn}) => (
  <Query query={GET_ANTS} >
    {({ data: {ants = []} = {} }: AntResponse) => {
      updateAnts(...ants.map((ant: Ant) => ({...ant, racesCompleted: 0, racesPending: 0, likelihood: 0})))
      return null
    }}
  </Query>
);
export const AntList = connect(null, {updateAnts})(AntQuery)
