import { combineReducers } from "redux";
import cartreducer from './cartreducer';
import toget from "./tosendid";
import cartnum from './cartnum'
const rootreducers = combineReducers({
    Cartt: cartreducer,
    // Num: cartnum,

    Page: toget,
})
export default rootreducers;