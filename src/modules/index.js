import { combineReducers } from "redux";
import logincheck from "./logincheck";
import special from './special';


//루트 리듀서 
//리듀서 합치기 combineReducers({객체 형태로})
const rootReducer = combineReducers({logincheck : logincheck, special: special});

export default rootReducer;