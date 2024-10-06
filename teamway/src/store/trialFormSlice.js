import { createSlice } from "@reduxjs/toolkit";

const trialFormSlice = createSlice({
  name: "trialForm",
  initialState: {
    isFormOpen: false,
  },
  reducers: {
    openForm: (state) => {
      state.isFormOpen = true;
    },
    closeForm: (state) => {
      state.isFormOpen = false;
    },
  },
});

export const { openForm, closeForm } = trialFormSlice.actions;
export default trialFormSlice.reducer;
