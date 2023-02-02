import { configureStore } from '@reduxjs/toolkit'

import dictionarySlice from '@/store/reducers/dictionarySlice'
import navSlice from '@/store/reducers/navSlice'

import dictionariesApi from '@/store/api/dictionariesApi'

const store = configureStore({
    reducer: {
        nav: navSlice.reducer,
        dictionary: dictionarySlice.reducer,
        [dictionariesApi.reducerPath]: dictionariesApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(dictionariesApi.middleware)
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store
