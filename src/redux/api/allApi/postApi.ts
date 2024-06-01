import { baseApi } from "../baseApi";

const postApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPost: build.mutation({
      query: (data) => ({
        url: "/create-post",
        method: "POST",
        contentType: "application/json",
        data,
      }),
      invalidatesTags: ["post"],
    }),

    getAllPost: build.query({
      query: () => ({
        url: "/get-psot",
        method: "GET",
      }),
      providesTags: ["post"],
    }),
  }),
  overrideExisting: true,
});

export const { useCreatePostMutation, useGetAllPostQuery } = postApi;
