import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';
import axios from 'axios';

export const getIces = createAsyncThunk("ices/getIces", async()=> {
    const response = await axios.get('https://api.sampleapis.com/coffee/iced');
    return response.data;
});

const icesEntity = createEntityAdapter({
    selectId: (ice) => ice.id
})

const iceSlice = createSlice(
    {
        name: 'ice',
        initialState: icesEntity.getInitialState(),
        extraReducers: {
            [getIces.fulfilled]: (state, action) => {
                icesEntity.setAll(state, action.payload);
            }
        }
    }
)

export const IceSelector = icesEntity.getSelectors(state => state.ice);
export default iceSlice.reducer;