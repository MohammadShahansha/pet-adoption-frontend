import { baseApi } from "../baseApi";

const petsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPets: build.mutation({
      query: (data) => ({
        url: "/pets",
        method: "POST",
        contentType: "application/json",
        data,
      }),
      invalidatesTags: ["pets"],
    }),

    getAllpets: build.query({
      query: () => ({
        url: "/pets",
        method: "GET",
      }),
      providesTags: ["pets"],
    }),

    deletePet: build.mutation({
      query: (id) => ({
        url: `/pets/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["pets"],
    }),
    updatePet: build.mutation({
      query: (arg) => ({
        url: `/pets/${arg?.id}`,
        method: "PUT",
        data: arg,
      }),
      invalidatesTags: ["pets"],
    }),
    getSinglePets: build.query({
      query: (id) => ({
        url: `/pets/${id}`,
        method: "GET",
      }),
      providesTags: ["pets"],
    }),
    availabelPets: build.query({
      query: () => ({
        url: "/availavle-pets",
        method: "GET",
      }),
      providesTags: ["pets"],
    }),
  }),
});

export const {
  useCreatePetsMutation,
  useGetAllpetsQuery,
  useDeletePetMutation,
  useUpdatePetMutation,
  useGetSinglePetsQuery,
  useAvailabelPetsQuery,
} = petsApi;
