import { createSlice } from '@reduxjs/toolkit'

interface PopItem {
    isHidden: boolean
}

interface PopState {
    isHidden: boolean
}

const popSlice = createSlice({
    name: 'pop',
    initialState: {
        isHidden: true
    },
    reducers: {
        setIsHidden: (state) => {
            state.isHidden = !state.isHidden
        }
    }
})

export const { setIsHidden } = popSlice.actions

export default popSlice
