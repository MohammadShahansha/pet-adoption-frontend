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
        url: "/get-users",
        method: "GET",
      }),
      providesTags: ["users"],
    }),

    deleteUser: build.mutation({
      query: (id) => ({
        url: `/delete-user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
    updateUsers: build.mutation({
      query: (arg) => ({
        url: `/update-user/${arg?.id}`,
        method: "PUT",
        data: arg,
      }),
      invalidatesTags: ["users"],
    }),
    getMe: build.query({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
      providesTags: ["users"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useDeleteUserMutation,
  useUpdateUsersMutation,
  useGetMeQuery,
} = usersApi;
