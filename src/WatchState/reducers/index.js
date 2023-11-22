import { combineReducers } from "redux";
import watchlist from "./watchlist";
import reducee from "./watchlist";
const rootreducers = combineReducers({
    Watch: watchlist,
})
export default rootreducers;