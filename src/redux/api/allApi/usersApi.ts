import { baseApi } from "../baseApi";

const usersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // createPets: build.mutation({
    //   query: (data) => ({
    //     url: "/pets",
    //     method: "POST",
    //     contentType: "application/json",
    //     data,
    //   }),
    //   invalidatesTags: ["pets"],
    // }),

    getAllUsers: build.query({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
      providesTags: ["users"],
    }),

    deleteUser: build.mutation({
      query: (id) => ({
        url: `/profile/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
    updateUsers: build.mutation({
      query: (arg) => ({
        url: `/pets/${arg?.id}`,
        method: "PUT",
        data: arg,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useDeleteUserMutation,
  useUpdateUsersMutation,
} = usersApi;
