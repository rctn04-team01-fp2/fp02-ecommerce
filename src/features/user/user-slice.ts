import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { UserType } from './types';
export interface UserState {
  token: string | null;
  isAdmin: boolean;
  loading: boolean;
}

async function fetchLogin(body: UserType) {
  try {
    const response = await fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const result: { token: string } = await response.json();
    return result;
  } catch (e) {
    return e;
  }
}

export const useLogin = createAsyncThunk('login', async (body: UserType) => {
  try {
    const result = await fetchLogin(body);
    return result;
  } catch (e) {
    return e;
  }
});

const initialState: UserState = {
  token: null,
  isAdmin: false,
  loading: false,
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
    builder.addCase(useLogin.pending, (state) => {
      return { token: null, isAdmin: false, loading: true };
    });
    builder.addCase(useLogin.fulfilled, (state, action: any) => {
      const token = action.payload.token;
      return { token, isAdmin: false, loading: false };
    });
    builder.addCase(useLogin.rejected, (state) => {
      return { ...initialState };
    });
  },
});

export const { logout } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
