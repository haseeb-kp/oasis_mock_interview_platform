import axios from "../../../utils/axios";
import { loginPost } from "../../../constants/urls";
import candidateReducer, {
  candidateLoginSuccess,
  candidateLoginRequest,
  candidateLoginFail,
} from "../../reducers/candidate/candidateReducer";
import {
  CANDIDATE_LOGIN_REQUEST,
  CANDIDATE_LOGIN_SUCCESS,
  CANDIDATE_LOGIN_FAIL,
  CANDIDATE_LOGOUT,
} from "../../../constants/candidateConstants";

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch(candidateLoginRequest());

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://127.0.0.1:8000/api/candidate/login/",
      { username, password },
      config
    );

    dispatch(candidateLoginSuccess(data));

    localStorage.setItem("candidateInfo", JSON.stringify(data));
  } catch (error) {
    dispatch(
      candidateLoginFail(
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
      )
    );
  }
};

