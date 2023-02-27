import axios from "../../../utils/axios";
import { candidate_login, candidate_signup} from '../../../constants/urls'
import  {
  candidateLoginSuccess,
  candidateLoginRequest,
  candidateLoginFail,
  candidateLogout,
} from "../../slices/candidate/candidateLoginSlice";
import  {
  candidateRegisterSuccess,
  candidateRegisterRequest,
  candidateRegisterFail,
} from "../../slices/candidate/candidateRegisterSlice";

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch(candidateLoginRequest());

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      candidate_login,
      { username, password },
      config
    );

    dispatch(candidateLoginSuccess(data));

    localStorage.setItem("token", JSON.stringify(data.token));
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

export const register = (username, phone_number, name, password) => async (dispatch) => {
  try {
    dispatch(candidateRegisterRequest());

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      candidate_signup,
      { username, phone_number, name, password },
      config
    );

    dispatch(candidateRegisterSuccess(data));

    localStorage.setItem("token", JSON.stringify(data.token));
  } catch (error) {
    dispatch(
      candidateRegisterFail(
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
      )
    );
  }
};

export const logout = () => (dispatch) =>{
  localStorage.removeItem('candidateInfo')
  dispatch(candidateLogout())
}

