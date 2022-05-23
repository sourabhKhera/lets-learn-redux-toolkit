import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type counterState  = {
    value: number,
};

const initialState: counterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            // its okay to do this immer makes it imutable under the hood
            state.value += 1;
        },
        amountAdded: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    }
});

export const { increment, amountAdded } = counterSlice.actions;

export default counterSlice.reducer;
