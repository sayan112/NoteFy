import {
  combineReducers,
  createStore,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from  'redux-devtools-extension';
import thunk from "redux-thunk";
import userLoginReducer, { userRegisterReducer } from "../src/reducers/userReducers"


const reducer = combineReducers({
  // this will contain our reducers
  // for now I only pass userLogin 
  
  UserLogin:userLoginReducer ,
   UserRegister:userRegisterReducer,
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


