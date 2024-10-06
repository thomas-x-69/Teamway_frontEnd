import { configureStore } from "@reduxjs/toolkit";
import trialFormReducer from "./trialFormSlice";

const store = configureStore({
  reducer: {
    trialForm: trialFormReducer,
  },
});

export default store;
