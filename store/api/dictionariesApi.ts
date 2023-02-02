import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const dictionariesApi = createApi({
    reducerPath: 'dictionariesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api/dictionaries/'
    }),
    endpoints: (builder) => ({
        getAllDictionaries: builder.query({
            query: () => ''
        }),
        getDictionaryByName: builder.query({
            query: (name: string) => name
        })
    })
})

export const { useGetAllDictionariesQuery, useGetDictionaryByNameQuery } =
    dictionariesApi

export default dictionariesApi
