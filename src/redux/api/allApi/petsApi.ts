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
  }),
});

export const {
  useCreatePetsMutation,
  useGetAllpetsQuery,
  useDeletePetMutation,
} = petsApi;
