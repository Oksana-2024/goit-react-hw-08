import { createSlice } from "@reduxjs/toolkit";

const filters = {
  search: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filters,
  reducers: {
    changeSearchFilter: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { changeSearchFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
