import { configureStore } from "@reduxjs/toolkit";
// import { candidateLoginReducer } from "../reducers/candidate/candidateReducer";
import candidateLoginReducer, {candidateLoginSuccess} from '../slices/candidate/candidateLoginSlice'
import candidateRegisterReducer  from '../slices/candidate/candidateRegisterSlice'

const store = configureStore({
  reducer: {
    candidateLogin: candidateLoginReducer,
    candidateRegister: candidateRegisterReducer,
  },
});

const candidateInfoFromStorage = localStorage.getItem("candidateInfo")
  ? JSON.parse(localStorage.getItem("candidateInfo"))
  : null;

if (candidateInfoFromStorage) {
  store.dispatch(candidateLoginSuccess(candidateInfoFromStorage));
}

export default store;
