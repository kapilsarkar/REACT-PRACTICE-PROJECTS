import { createSlice } from "@reduxjs/toolkit";


const expenseSlice = createSlice({
    name: "expense",
    initialState: {
        expense: JSON.parse(localStorage.getItem("expense")) || 0,
    },
    reducers: {
        addExpense: (state, action) => {
            state.expense = state.expense + action.payload;
            localStorage.setItem("expense", JSON.stringify(state.expense));
        },
        resetExpense: (state) => {
            state.expense = 0;
            localStorage.setItem("expense", JSON.stringify(0));
        },
    },
});

export const { addExpense, resetExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
