import { baseApi } from "../baseApi";

const adoptionRequestApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAdoptionRequest: build.mutation({
      query: (data) => ({
        url: "/adoption-request",
        method: "POST",
        contentType: "application/json",
        data,
      }),
      invalidatesTags: ["adoption"],
    }),

    getAllAdoptionRequest: build.query({
      query: () => ({
        url: "/adoption-requests",
        method: "GET",
      }),
      providesTags: ["adoption"],
    }),
    getUserAdoptionRequest: build.query({
      query: () => ({
        url: "/user-adoption-requests",
        method: "GET",
      }),
      providesTags: ["adoption"],
    }),

    deleteRequest: build.mutation({
      query: (id) => ({
        url: `/adoption-request/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["adoption"],
    }),
    updateRequest: build.mutation({
      query: (arg) => ({
        url: `/adoption-requests/${arg?.id}`,
        method: "PUT",
        data: arg,
        contentType: "application/json",
      }),
      invalidatesTags: ["adoption"],
    }),

    getRequestStatus: build.query({
      query: () => ({
        url: "/adoption-request-status",
        method: "GET",
      }),
      providesTags: ["adoption"],
    }),
  }),
});

export const {
  useCreateAdoptionRequestMutation,
  useGetAllAdoptionRequestQuery,
  useGetUserAdoptionRequestQuery,
  useUpdateRequestMutation,
  useDeleteRequestMutation,
  useGetRequestStatusQuery,
} = adoptionRequestApi;
