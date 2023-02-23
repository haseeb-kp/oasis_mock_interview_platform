import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  candidateInfo: null,
  error: null,
};

const candidateLoginSlice = createSlice({
  name: 'candidateLogin',
  initialState,
  reducers: {
    candidateLoginRequest: (state) => {
      state.loading = true;
    },
    candidateLoginSuccess: (state, action) => {
      state.loading = false;
      state.candidateInfo = action.payload;
    },
    candidateLoginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    candidateLogout: (state) => {
      return { };
    }
  }
});

export const { candidateLoginRequest, candidateLoginSuccess, candidateLoginFail, candidateLogout } = candidateLoginSlice.actions;

export default candidateLoginSlice.reducer;