import {
  combineReducers,
  createStore,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from  'redux-devtools-extension';
import thunk from "redux-thunk";
import userLoginReducer, { userRegisterReducer } from "../src/reducers/userReducers"
import { noteCreateReducer, noteDeleteReducer, noteListReducer, noteUpdateReducer } from "./reducers/noteReducers";


const reducer = combineReducers({
  // this will contain our reducers
  // for now I only pass userLogin 
  
  UserLogin:userLoginReducer ,
   UserRegister:userRegisterReducer,
    notelist : noteListReducer,
     noteCreate : noteCreateReducer,
     noteUpdate : noteUpdateReducer,
     noteDelete : noteDeleteReducer,
     
});
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

  const middleware= [thunk];
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
   export default store;


