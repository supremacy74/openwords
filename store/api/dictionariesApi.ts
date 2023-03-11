import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dictionariesApi = createApi({
    reducerPath: 'dictionariesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api/dictionaries/'
    }),
    endpoints: (builder) => ({
        getDictionaries: builder.query({
            query: () => ''
        }),
        getDictionary: builder.query({
            query: (id: string) => id
        })
    })
})

export const { useGetDictionariesQuery, useGetDictionaryQuery } =
    dictionariesApi
