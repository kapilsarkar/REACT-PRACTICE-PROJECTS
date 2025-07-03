import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import incomeReducer from "./incomeSlice";
const store = configureStore({
    reducer: {
        theme: themeReducer,
        income: incomeReducer,
    },
})

export default store;