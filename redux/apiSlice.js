import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://91.225.160.55:5000" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    getUser: builder.query({
      query: (userId) => `user/${userId}`,
    }),
    createTask: builder.mutation({
      query: (newTask) => ({
        url: "/tasks",
        method: "POST",
        body: newTask,
      }),
    }),
    updateTask: builder.mutation({
      query: ({ taskId, updatedTask }) => ({
        url: `/tasks/${taskId}`,
        method: "PUT",
        body: updatedTask,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetUserQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useLogoutMutation,
} = apiSlice;
