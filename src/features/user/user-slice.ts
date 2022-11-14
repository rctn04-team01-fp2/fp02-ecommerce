import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { UserType } from './types';
export interface UserState {
  token: string | null;
  isAdmin: boolean;
  loading: boolean;
  username: string;
}

export const useLogin = createAsyncThunk(
  'login',
  async (body: UserType): Promise<{ token: string; username: string }> => {
    const response = await fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const result: { token: string } = await response.json();
    const _result = { ...result, username: body.username };
    return _result;
  },
);

const initialState: UserState = {
  token: null,
  isAdmin: false,
  loading: false,
  username: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(useLogin.pending, (state) => {
        return { ...state, loading: true };
      })
      .addCase(useLogin.fulfilled, (state, action) => {
        const token = action.payload.token;
        return {
          loading: false,
          isAdmin: false,
          token,
          username: action.payload.username,
        };
      })
      .addCase(useLogin.rejected, (state, action) => {
        return { ...initialState };
      });
  },
});

export const { logout } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
