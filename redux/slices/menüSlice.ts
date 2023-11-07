import { createSlice } from "@reduxjs/toolkit";

interface MenüState {
  menüModal: boolean;
}

const initialState: MenüState = {
  menüModal: false,
};

export const menüSlice = createSlice({
  name: "menüSlice",
  initialState,
  reducers: {
    openMenü: (state) => {
      state.menüModal = !state.menüModal;
    },
  },
});

export const { openMenü } = menüSlice.actions;

export default menüSlice.reducer;
