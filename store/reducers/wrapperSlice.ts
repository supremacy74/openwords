import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface WrapperState {
    isScrollable: boolean
}

const initialState: WrapperState = {
    isScrollable: true
}

const wrapperSlice = createSlice({
    name: 'wrapper',
    initialState,
    reducers: {
        setIsScrollable: (state) => {
            state.isScrollable = !state.isScrollable
        }
    }
})

export const { setIsScrollable } = wrapperSlice.actions

export default wrapperSlice
