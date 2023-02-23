import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  candidateInfo: null,
  error: null,
};

const candidateRegisterSlice = createSlice({
  name: 'candidateRegister',
  initialState,
  reducers: {
    candidateRegisterRequest: (state) => {
      state.loading = true;
    },
    candidateRegisterSuccess: (state, action) => {
      state.loading = false;
      state.candidateInfo = action.payload;
    },
    candidateRegisterFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { candidateRegisterRequest, candidateRegisterSuccess, candidateRegisterFail, candidateLogout } = candidateRegisterSlice.actions;

export default candidateRegisterSlice.reducer;