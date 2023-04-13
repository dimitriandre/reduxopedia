import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 10 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    //here we will define all actions
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementMultiplier: (state, action) => {
      state.count += Number(action.payload.multiplier);
    },
    decrementMultiplier: (state, action) => {
      state.count -= action.payload.multiplier;
    },
    resetCounter: (state) => {
      state.count = 10;
    },
  },
});

export const {
  increment,
  decrement,
  incrementMultiplier,
  decrementMultiplier,
  resetCounter,
} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
