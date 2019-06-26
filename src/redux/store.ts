import { antStatsReducer } from "./reducers";
import { createStore } from "redux";

export const antStatsStore = createStore(antStatsReducer)
