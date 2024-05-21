"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface jsonPlaceholderApiProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const jsonPlaceholderApi = createApi({
  reducerPath: "jsonPlaceholderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/todos/",
  }),
  endpoints: (builder) => ({
    getJsonById: builder.query<jsonPlaceholderApiProps, number>({
      query: (userId) => `/${userId}`,
    }),
    getAllJson: builder.query<jsonPlaceholderApiProps[], void>({
        query: () => "", 
      }),
  }),
});

export const { useGetJsonByIdQuery, useGetAllJsonQuery } = jsonPlaceholderApi;
