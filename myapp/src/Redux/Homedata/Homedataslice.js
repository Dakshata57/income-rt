import { createSlice } from "@reduxjs/toolkit";

const HomeDataSlice = createSlice({
  name: "IncomeExpense",

  initialState: {
    amount: null,
    description: "",
    type: "",
    userInput: [],
    incomeArray: [],
    expenseArray: [],
    totalIncomeArray: [],
    totalExpenseArray: [],
    totalincome: 0,
    totalExpense: 0,
  },

  reducers: {
    updateAmount(state, data) {
      state.amount = data;
    },
    updateDescription(state, data) {
      state.description = data;
    },
    updateType(state, data) {
      state.type = data;
    },
    makeArray(state, data) {
      if (data.payload.typeOne === "income") {
        state.incomeArray.push({
          amount: data.payload.amount,
          description: data.payload.description,
          type: data.payload.typeOne,
        });
        state.totalIncomeArray.push(+data.payload.amount);
      } else if (data.payload.typeOne === "expense") {
        state.expenseArray.push({
          amount: data.payload.amount,
          description: data.payload.description,
          type: data.payload.typeOne,
        });
        state.totalExpenseArray.push(+data.payload.amount);
      }
    },
  },
});

export default HomeDataSlice.reducer;
export const { updateAmount, updateDescription, updateType, makeArray } =
  HomeDataSlice.actions;
