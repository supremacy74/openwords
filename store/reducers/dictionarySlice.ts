import { createSlice } from '@reduxjs/toolkit'

const navSlice = createSlice({
    name: 'dictionary',
    initialState: {
        index: 0
    },
    reducers: {
        add: (state) => {
            state.index += 1
        }
    }
})

export const { add } = navSlice.actions

export default navSlice
