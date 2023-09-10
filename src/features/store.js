import { configureStore } from "@reduxjs/toolkit";
import Homecontroller from "./Homecontroller";

const store=configureStore({
    reducer:{
        data:Homecontroller
    }
})
export default store