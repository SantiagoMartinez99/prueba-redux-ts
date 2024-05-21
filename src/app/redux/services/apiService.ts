import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type JsonPlaceholderApiProps = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const JsonPlaceholderApi = createApi({
  reducerPath: "jsonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/todos/",
  }),
  endpoints: (builder) => ({
    getJsonById: builder.query<JsonPlaceholderApiProps, number>({
      query: (userId) => `/${userId}`,
    }),
  }),
});

export const { useGetJsonByIdQuery } = JsonPlaceholderApi;
