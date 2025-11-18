import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Admin {
  id: string;
  name: string;
  email: string;
  role: string;
  tempPassword?: string;
  password?: string;
  createdAt: string;
}

interface AdminState {
  admins: Admin[];
}

const initialState: AdminState = {
  admins: [],
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    addAdmin: (state, action: PayloadAction<Omit<Admin, 'id' | 'createdAt'>>) => {
      const newAdmin: Admin = {
        id: Date.now().toString(),
        ...action.payload,
        createdAt: new Date().toISOString(),
      };
      state.admins.push(newAdmin);
    },
    updateAdminPassword: (state, action: PayloadAction<{ id: string; password: string }>) => {
      const admin = state.admins.find(a => a.id === action.payload.id);
      if (admin) {
        admin.password = action.payload.password;
        delete admin.tempPassword;
      }
    },
  },
});

export const { addAdmin, updateAdminPassword } = adminSlice.actions;
export default adminSlice.reducer;
