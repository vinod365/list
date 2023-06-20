import { createSlice } from "@reduxjs/toolkit";

export const addSlice = createSlice({
  name: "add",
  initialState: {
    value: [
      {
        heading: "Normallization",
        description:
          "<p>Normalization is the process Of ordering basic data structures to ensure that the basic data created is of good quality. Used to minimize data redundancy and data inconsistencies. Normalization stage starts from the lightest stage (INF) to the strictest (5NF). Usually only up to the 3NF or BCNF level as they are sufficient to produce good quality' tables.</p>",
      },
      {
        heading: " Algorithm",
        description:
          "<p>The word Algorithm means “A set of rules to be followed in calculations or other problem-solving operations” Or “A procedure for solving a mathematical problem in a finite number of steps that frequently involves recursive operations “.</p>",
      },
    ],
  },
  reducers: {
    increment: (state, action) => {
      state.value.push(action.payload);
    },

    decrement: (state, action) => {
      const obj = action.payload;
      const val = state.value.indexOf((el) => el["heading"] == obj["heading"]);

      console.log(val);
      if (val != -1) {
        state.value[val].description = action.payload["description"];
        return;
      }
      state.value = state.value.filter((e) => e["heading"] != obj["heading"]);
    },
    search: (state, action) => {},
  },
});

export const { increment, decrement } = addSlice.actions;

export const selectAdd = (state) => state.add.value;

export default addSlice.reducer;
