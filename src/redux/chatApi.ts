import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export interface WordProps {
    data: Array<any>;
}

export const chatApi = createApi({
    reducerPath: "chatApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/`,
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    endpoints: (build) => ({
        // * get answers
        getAnswers: build.query<
            WordProps,
            {
                query?: string;
            }
        >({
            query: ({ query = "" }) => `word?${query}`,
        }),
    }),
});

export const {
    useGetAnswersQuery,
    util: { getRunningOperationPromises },
} = chatApi;

export const { getAnswers } = chatApi.endpoints;
