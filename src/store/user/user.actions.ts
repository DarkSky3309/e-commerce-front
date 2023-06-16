import { createAsyncThunk } from '@reduxjs/toolkit';

import { IAuthResponse, IEmailPassword } from '@/store/user/user.inteface';

import { errorHandler } from '@/API/api.helper';
import { removeTokenAndUserStorage } from '@/services/auth/auth.helper';
import { AuthService } from '@/services/auth/auth.service';

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
  'auth/register',
  async (data, thunkAPI) => {
    try {
      const responce = await AuthService.authorization('register', data);
      return responce;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
  'auth/login',
  async (data, thunkAPI) => {
    try {
      const responce = await AuthService.authorization('login', data);
      return responce;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  removeTokenAndUserStorage();
});

export const checkAuth = createAsyncThunk<IAuthResponse>(
  'auth/checkAuth',
  async (_, thunkAPI) => {
    try {
      const response = await AuthService.getNewTokens();
      return response.data;
    } catch (error) {
      if (errorHandler(error) === 'jwt expired') {
        thunkAPI.dispatch(logout());
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);
