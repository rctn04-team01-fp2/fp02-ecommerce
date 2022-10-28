import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { adminData, userData } from '../../utils/account-data';
import { UserType } from './types';

export interface UserState {
  user: UserType | null;
  isAdmin: boolean;
  isUser: boolean;
}

const initialState: UserState = {
  user: null,
  isAdmin: false,
  isUser: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserType>) => {
      const { email, password } = action.payload;

      const isAdmin =
        adminData.email === email && adminData.password === password;

      const isUser = !!userData.find(
        (user) => user.email === email && user.password === password,
      );

      if (isAdmin) {
        return {
          ...state,
          user: { email, password },
          isAdmin: true,
        };
      } else if (isUser) {
        return { ...state, user: { email, password }, isUser: true };
      } else {
        return { ...initialState };
      }
    },
    logout: () => {
      return { ...initialState };
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
