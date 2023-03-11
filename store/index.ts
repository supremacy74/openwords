import { configureStore } from '@reduxjs/toolkit'

import navSlice from '@/store/reducers/navSlice'
import resultsSlice from '@/store/reducers/resultsSlice'
import loginSlice from '@/store/reducers/loginSlice'
import registerSlice from '@/store/reducers/registerSlice'
import modeSlice from '@/store/reducers/modeSlice'
import wrapperSlice from '@/store/reducers/wrapperSlice'
import popSlice from '@/store/reducers/popSlice'

import { dictionariesApi } from '@/store/api/dictionariesApi'
import { authApi } from '@/store/api/authApi'

const store = configureStore({
    reducer: {
        results: resultsSlice.reducer,
        nav: navSlice.reducer,
        login: loginSlice.reducer,
        register: registerSlice.reducer,
        mode: modeSlice.reducer,
        wrapper: wrapperSlice.reducer,
        pop: popSlice.reducer,
        [dictionariesApi.reducerPath]: dictionariesApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(
            dictionariesApi.middleware,
            authApi.middleware
        )
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store
