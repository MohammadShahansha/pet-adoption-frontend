import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://pet-adoption-one.vercel.app/api",
    // baseUrl: "http://localhost:5000/api",
  }),
  endpoints: () => ({}),
  tagTypes: ["pets", "users", "adoption", "review", "post"],
});
