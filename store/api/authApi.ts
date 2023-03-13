import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth`,
        prepareHeaders: (headers, { getState }) => {
            let token = localStorage.getItem('accessToken')

            console.log(token)

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
