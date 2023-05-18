
import axios from "axios";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS ,USER_RESGITER_REQUEST, USER_RESGITER_SUCCESS ,USER_REGISTER_FAIL } from "../constants/userconstants";
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

 export const register=(name, email, password , pic ) =>async(dispatch)=>{
   try{
 dispatch({type: USER_RESGITER_REQUEST});
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
   console.log(name);
     console.log(email);
       console.log(password);
         console.log(pic);
   
   const {data}=await axios.post ("/api/users",{name,pic ,email,password},config);
    console.log(data);

   dispatch({type:USER_RESGITER_SUCCESS,payload:data});
   dispatch({type:USER_LOGIN_SUCCESS,payload:data});
    localStorage.setItem("userInfo",JSON.stringify(data));
 }
 catch(error){
 dispatch({
      type:USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });

 }
}
 export const logout=()=>async(dispatch)=>{
     localStorage.removeItem("userInfo");
      dispatch({type: "USER_LOGOUT"})

 }

  