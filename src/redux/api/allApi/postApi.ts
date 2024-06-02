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
        url: "/get-post",
        method: "GET",
      }),
      providesTags: ["post"],
    }),
    getSinglePost: build.query({
      query: (arg) => ({
        url: `/get-single-post/${arg?.id}`,
        method: "GET",
      }),
      providesTags: ["post"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useCreatePostMutation,
  useGetAllPostQuery,
  useGetSinglePostQuery,
} = postApi;
