import axios from "axios";
import { NOTE_LIST_REQUEST , NOTE_LIST_FAIL , NOTE_LIST_SUCCESS, NOTE_CREATE_REQUEST, NOTE_CREATE_SUCCESS, NOTE_CREATE_FAIL, NOTE_UPDATE_FAIL, NOTE_UPDATE_SUCCESS, NOTE_UPDATE_REQUEST, NOTE_DELETE_REQUEST, NOTE_DELETE_SUCCESS, NOTE_DELETE_FAIL } from "../constants/NotesContstants";
 export const listNotes = ()=>async(dispatch,getState)=>{
     try{

         dispatch({
             type:NOTE_LIST_REQUEST,
         });
          const {
             UserLogin:{userInfo},
          }= getState();
           const config = {
             headers : {
                 Authorization : `Bearer ${userInfo.token}`,
             },
           };
            const {data}= await axios.get(`/api/notes`,config);
             dispatch({
                type:NOTE_LIST_SUCCESS,
                    payload: data, 
             });
     }
      catch(error){
         const message= error.response && error.response.data.message ? error.response.data.message : error.message;

          dispatch({
            type:NOTE_LIST_FAIL,
            payload:message,
          })
      }

 }


 export const createNoteAction = (title , content , category) => async (dispatch, getState) => {
   try {
     dispatch({
       type: NOTE_CREATE_REQUEST,
     });
     const {
       UserLogin: { userInfo },
     } = getState();
     const config = {
       headers: {
        "Content-Type": "application/json",
         Authorization: `Bearer ${userInfo.token}`,
       },
     };
     const { data } = await axios.post(`/api/notes/create`,{title, content, category}, config);
     console.log(data);
     dispatch({
       type: NOTE_CREATE_SUCCESS,
       payload: data,
     });
   } catch (error) {
     const message =
       error.response && error.response.data.message
         ? error.response.data.message
         : error.message;

     dispatch({
       type: NOTE_CREATE_FAIL,
       payload: message,
     });
   }
 };

  export const updateNoteAction =(id,title,content,category)=> async(dispatch,getState)=>{
try {
     dispatch({
       type: NOTE_UPDATE_REQUEST,
     });
   const UserLogin = JSON.parse(localStorage.getItem("userInfo"));
     const config = {
       headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${UserLogin.token}`,
       },
     };
     const { data } = await axios.put(`/api/notes/${id}`,{title, content, category}, config);
     console.log(data);
     dispatch({
       type: NOTE_UPDATE_SUCCESS,
       payload: data,
     });
   } catch (error) {
     const message =
       error.response && error.response.data.message
         ? error.response.data.message
         : error.message;

     dispatch({
       type: NOTE_UPDATE_FAIL,
       payload: message,
     });
   }

  }



  
  export const deleteNoteAction =
    (id, title, content, category) => async (dispatch, getState) => {
      try {
        dispatch({
          type: NOTE_DELETE_REQUEST,
        });
        const UserLogin = JSON.parse(localStorage.getItem("userInfo"));
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${UserLogin.token}`,
          },
        };
        const { data } = await axios.delete(
          `/api/notes/${id}`,
          config
        );
        console.log(data);
        dispatch({
          type: NOTE_DELETE_SUCCESS,
          payload: data,
        });
      } catch (error) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;

        dispatch({
          type: NOTE_DELETE_FAIL,
          payload: message,
        });
      }
    };