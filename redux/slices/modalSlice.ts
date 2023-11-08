import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  menüModal: boolean;
  loginModal: boolean;
  registerModal: boolean;
}

const initialState: ModalState = {
  menüModal: false,
  loginModal: false,
  registerModal: false,
};

export const modalSlice = createSlice({
  name: "menüSlice",
  initialState,
  reducers: {
    menüModalFunc: (state) => {
      state.menüModal = !state.menüModal;
    },
    loginModalFunc: (state) => {
      state.loginModal = !state.loginModal;
    },
    registerModalFunc: (state) => {
      state.registerModal = !state.registerModal;
    },
  },
});

export const { menüModalFunc, loginModalFunc, registerModalFunc } =
  modalSlice.actions;

export default modalSlice.reducer;
