import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  user: {
    email: string;
    name: string;
    role: string;
    id?: string;
  } | null;
  isTemporaryPassword: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  isTemporaryPassword: false,
};

// Dummy credentials for demo
const DUMMY_CREDENTIALS = {
  email: 'admin@quickcommerce.com',
  password: 'admin123',
  name: 'Super Admin',
  role: 'super_admin',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string; password: string; admins: any[] }>) => {
      const { email, password, admins } = action.payload;
      
      // Check super admin credentials
      if (email === DUMMY_CREDENTIALS.email && password === DUMMY_CREDENTIALS.password) {
        state.isAuthenticated = true;
        state.user = {
          email: DUMMY_CREDENTIALS.email,
          name: DUMMY_CREDENTIALS.name,
          role: DUMMY_CREDENTIALS.role,
        };
        state.isTemporaryPassword = false;
        return;
      }
      
      // Check created admins
      const admin = admins.find(a => a.email === email);
      if (admin) {
        // Check if using temporary password
        if (admin.tempPassword && password === admin.tempPassword) {
          state.isAuthenticated = true;
          state.user = {
            id: admin.id,
            email: admin.email,
            name: admin.name,
            role: admin.role,
          };
          state.isTemporaryPassword = true;
        } 
        // Check if using updated password
        else if (admin.password && password === admin.password) {
          state.isAuthenticated = true;
          state.user = {
            id: admin.id,
            email: admin.email,
            name: admin.name,
            role: admin.role,
          };
          state.isTemporaryPassword = false;
        }
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.isTemporaryPassword = false;
    },
    clearTemporaryPassword: (state) => {
      state.isTemporaryPassword = false;
    },
  },
});

export const { login, logout, clearTemporaryPassword } = authSlice.actions;
export default authSlice.reducer;
