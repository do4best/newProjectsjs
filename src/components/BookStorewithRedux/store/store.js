import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        EXPENSE:()=>"DATA"

    }
})
export {store}