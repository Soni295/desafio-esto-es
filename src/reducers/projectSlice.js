import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialState } from './inicialState';

const name = 'project'

const TYPES = {
  CREATE: name + '/create'
}

export const addProject = createAsyncThunk(TYPES.CREATE, async(project) => {
  setTimeout(()=> {
    console.log(project)
  }, 1000)
  return project
})


const projectSlice = createSlice({
  name,
  initialState,
  reducer: {},
  extraReducers: {
    [addProject.pending]: (state, action) => {
      state.status = 'loading';
    },
    [addProject.fulfilled]: (state, {payload}) => {
      state.status = 'succeeded';
      // Add any fetched posts to the array
      state.data = [...state.data, payload]
      //state.data = action.payload;
    },
    [addProject.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default projectSlice.reducer;
