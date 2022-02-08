import { createSlice } from '@reduxjs/toolkit';
import { usersApi } from '../users/users-sliceApi';

export const authSlice = createSlice({
  name: 'auth',
  initialState: { token: null, user: null },
  extraReducers: builder => {
    builder.addMatcher(
      usersApi.endpoints.registerUser.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLogged = true;
      },
    );
    builder.addMatcher(
      usersApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLogged = true;
      },
    );
    builder.addMatcher(usersApi.endpoints.logoutUser.matchFulfilled, state => {
      state.token = null;
      state.user = null;
      state.isLogged = false;
    });
    builder.addMatcher(
      usersApi.endpoints.getUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
        state.isLogged = true;
      },
    );
  },
});
