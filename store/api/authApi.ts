import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/auth',
        prepareHeaders: (headers, { getState }) => {
            let token = localStorage.getItem('accessToken')

            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }

            return headers
        }
    }),
    endpoints: (builder) => ({
        getData: builder.query({
            query: () => ''
        })
    })
})

export const { useGetDataQuery } = authApi
