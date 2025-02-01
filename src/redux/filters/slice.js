import { createSlice } from "@reduxjs/toolkit";

const filters = {
  name: "",
  number: "",
};



const filtersSlice = createSlice({
  name: "nameFilters",
  initialState: filters,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});



export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;