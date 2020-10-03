import { combineReducers } from "redux";
// import auth from './auth/reducers';
import budget from './budget/reducers';
const rootReducer = combineReducers({
    budget
});
export default rootReducer;