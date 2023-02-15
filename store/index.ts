import { configureStore } from '@reduxjs/toolkit'

import navSlice from '@/store/reducers/navSlice'
import resultsSlice from '@/store/reducers/resultsSlice'

import dictionariesApi from '@/store/api/dictionariesApi'

const store = configureStore({
    reducer: {
        results: resultsSlice.reducer,
        nav: navSlice.reducer,
        [dictionariesApi.reducerPath]: dictionariesApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(dictionariesApi.middleware)
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store
