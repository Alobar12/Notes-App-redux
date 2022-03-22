import areaSlice from "./textarea/areaSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store=configureStore({
    reducer:{
        textarea:areaSlice
    }
})