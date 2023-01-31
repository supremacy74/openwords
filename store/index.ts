import { configureStore } from '@reduxjs/toolkit'
import navSlice from '@/store/navSlice'

const store = configureStore({
    reducer: {
        nav: navSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store
