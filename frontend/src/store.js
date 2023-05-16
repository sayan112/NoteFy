import {
  combineReducers,
  createStore,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from  'redux-devtools-extension';
import thunk from "redux-thunk";
import userLoginReducer from "../src/reducers/userReducers"


const reducer = combineReducers({
  // this will contain our reducers
  // for now I only pass userLogin 
  
  UserLogin:userLoginReducer ,
});

export const initialState = {
  userLogin:{}
};

  const middleware= [thunk];
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
   export default store;

