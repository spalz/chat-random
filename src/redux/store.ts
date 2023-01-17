import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import { createWrapper } from "next-redux-wrapper";
import { chatApi } from "@redux";

export const makeStore = () =>
    configureStore({
        reducer: {
            [chatApi.reducerPath]: chatApi.reducer,
        },
        middleware: (gDM) => gDM().concat(chatApi.middleware),
    });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });
