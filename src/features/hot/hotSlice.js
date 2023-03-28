import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';
import axios from 'axios';

export const getHots = createAsyncThunk("hots/getHots", async()=> {
    const response = await axios.get('https://api.sampleapis.com/coffee/hot');
    return response.data;
});

const hotsEntity = createEntityAdapter({
    selectId: (hot) => hot.id
})

const hotSlice = createSlice(
    {
        name: 'hot',
        initialState: hotsEntity.getInitialState(),
        extraReducers: {
            [getHots.fulfilled]: (state, action) => {
                hotsEntity.setAll(state, action.payload);
            }
        }
    }
)

export const hotSelector = hotsEntity.getSelectors(state => state.hot);
export default hotSlice.reducer;