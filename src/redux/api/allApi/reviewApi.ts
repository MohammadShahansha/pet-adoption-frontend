import { baseApi } from "../baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createReview: build.mutation({
      query: (data) => ({
        url: "/create-review",
        method: "POST",
        contentType: "application/json",
        data,
      }),
      invalidatesTags: ["review"],
    }),

    getAllReviews: build.query({
      query: () => ({
        url: "/get-reviews",
        method: "GET",
      }),
      providesTags: ["review"],
    }),

    updateReview: build.mutation({
      query: (arg) => ({
        url: `/update-review/${arg?.id}`,
        method: "PUT",
        data: arg,
      }),
      invalidatesTags: ["review"],
    }),
    getHomeReview: build.query({
      query: () => ({
        url: "/home-reviews",
        method: "GET",
      }),
      providesTags: ["review"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useCreateReviewMutation,
  useGetAllReviewsQuery,
  useGetHomeReviewQuery,
  useUpdateReviewMutation,
} = reviewApi;
