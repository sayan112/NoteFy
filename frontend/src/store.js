import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
} from "redux";
import { composeWithDevTools } from  'redux-devtools-extension';
import thunk from "redux-thunk";
const reducer = combineReducers({
// this will contain our reducers 
});
 const intitalState ={};
  const middleware= [thunk];
  const store = createStore(
    reducer,
    intitalState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
   export default store;