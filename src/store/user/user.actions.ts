import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAuthResponse, IEmailPassword } from '@/store/user/user.inteface';
import { AuthService } from '@/services/auth/auth.service';
import { removeTokenAndUserStorage } from '@/services/auth/auth.helper';
import { errorHandler } from '@/API/api.helper';

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
  'auth/register',
  async (data, thunkAPI) => {
    try {
      const responce = await AuthService.authorization('register', data);
      return responce;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
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
  },
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
      console.log(1);
      if (errorHandler(error) === 'jwt expired') {
        thunkAPI.dispatch(logout());
      }
      return thunkAPI.rejectWithValue(error);
    }
  });
