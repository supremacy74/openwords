import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import ResultInterface from '@/interfaces/ResultInterface'

interface ModeState {
    value: string
}

const initialState: ModeState = {
    value: 'light'
}

const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        change: (state) => {
            state.value = state.value === 'dark' ? 'light' : 'dark'
        },
        set: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { change, set } = modeSlice.actions

export default modeSlice
