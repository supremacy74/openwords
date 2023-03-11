import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import ResultInterface from '@/interfaces/ResultInterface'

interface ResultsState {
    isHidden: boolean
    values: Array<ResultInterface>
}

const initialState: ResultsState = {
    isHidden: true,
    values: []
}

const resultsSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {
        setVisibility: (state) => {
            state.isHidden = !state.isHidden
        },
        setResults: (state, action: PayloadAction<Array<ResultInterface>>) => {
            state.values = action.payload
        }
    }
})

export const { setVisibility, setResults } = resultsSlice.actions

export default resultsSlice
