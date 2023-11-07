import { createSlice } from "@reduxjs/toolkit";

const recentlyViewSlice = createSlice({
  name: "recentlyView",
  initialState: {
    recentlyView: [],
  },
  reducers: {
    addRecentlyView: (state, action) => {
      //   const actionItems = action.payload;

      //   if (!state.recentlyView.length) {
      //     state.recentlyView.push(actionItems);
      //   } else {
      //     state.recentlyView.push({ ...state.recentlyView, actionItems });
      //   }

      state.recentlyView.push(action.payload);
    },
  },
});

export const { addRecentlyView } = recentlyViewSlice.actions;
export default recentlyViewSlice.reducer;
