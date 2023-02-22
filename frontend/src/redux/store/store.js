import { configureStore } from "@reduxjs/toolkit";
// import { candidateLoginReducer } from "../reducers/candidate/candidateReducer";
import candidateReducer, {candidateLoginSuccess} from '../reducers/candidate/candidateReducer'

const store = configureStore({
  reducer: {
    candidateLogin: candidateReducer,
  },
});

const candidateInfoFromStorage = localStorage.getItem("candidateInfo")
  ? JSON.parse(localStorage.getItem("candidateInfo"))
  : null;

if (candidateInfoFromStorage) {
  store.dispatch(candidateLoginSuccess(candidateInfoFromStorage));
}

export default store;
