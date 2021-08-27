import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [
    {
      id: '01',
      title: 'Landing page',
      creationDate : '09/09/2020 10:30am',
      projectManager: {
        name: 'Walt Cosani',
        icon: null
      },
      assignedTo: {
        name: 'Ignacio Truffa',
        icon: null
      },
      status: 'Enable'
    },
    {
      id: '02',
      title: 'Landing page',
      creationDate : '09/09/2020 10:30am',
      projectManager: {
        name: 'Walt Cosani',
        icon: null
      },
      assignedTo: {
        name: 'Ignacio Truffa',
        icon: null
      },
      status: 'Enable'
    },
    {
      id: '03',
      title: 'Landing page',
      creationDate : '09/09/2020 10:30am',
      projectManager: {
        name: 'Walt Cosani',
        icon: null
      },
      assignedTo: {
        name: 'Ignacio Truffa',
        icon: null
      },
      status: 'Enable'
    },
    {
      id: '04',
      title: 'Landing page',
      creationDate : '09/09/2020 10:30am',
      projectManager: {
        name: 'Walt Cosani',
        icon: null
      },
      assignedTo: {
        name: 'Ignacio Truffa',
        icon: null
      },
      status: 'Enable'
    },
    {
      id: '05',
      title: 'Landing page',
      creationDate : '09/09/2020 10:30am',
      projectManager: {
        name: 'Walt Cosani',
        icon: null
      },
      assignedTo: {
        name: 'Ignacio Truffa',
        icon: null
      },
      status: 'Enable'
    },
    {
      id: '06',
      title: 'Landing page',
      creationDate : '09/09/2020 10:30am',
      projectManager: {
        name: 'Walt Cosani',
        icon: null
      },
      assignedTo: {
        name: 'Ignacio Truffa',
        icon: null
      },
      status: 'Enable'
    },
    {
      id: '07',
      title: 'Landing page',
      creationDate : '09/09/2020 10:30am',
      projectManager: {
        name: 'Walt Cosani',
        icon: null
      },
      assignedTo: {
        name: 'Ignacio Truffa',
        icon: null
      },
      status: 'Enable'
    },
    {
      id: '08',
      title: 'Landing page',
      creationDate : '09/09/2020 10:30am',
      projectManager: {
        name: 'Walt Cosani',
        icon: null
      },
      assignedTo: {
        name: 'Ignacio Truffa',
        icon: null
      },
      status: 'Enable'
    },
    {
      id: '09',
      title: 'Landing page',
      creationDate : '09/09/2020 10:30am',
      projectManager: {
        name: 'Walt Cosani',
        icon: null
      },
      assignedTo: {
        name: 'Ignacio Truffa',
        icon: null
      },
      status: 'Enable'
    },
    {
      id: '10',
      title: 'Landing page',
      creationDate : '09/09/2020 10:30am',
      projectManager: {
        name: 'Walt Cosani',
        icon: null
      },
      assignedTo: {
        name: 'Ignacio Truffa',
        icon: null
      },
      status: 'Enable'
    },
    {
      id: '11',
      title: 'Landing page',
      creationDate : '09/09/2020 10:30am',
      projectManager: {
        name: 'Walt Cosani',
        icon: null
      },
      assignedTo: {
        name: 'Ignacio Truffa',
        icon: null
      },
      status: 'Enable'
    },
  ],
  status: 'idle',
  error: null,
}


const name = 'project'

const TYPES = {
  CREATE: name + '/create'
}

export const addProject = createAsyncThunk(TYPES.CREATE, async() => {

})


const projectSlice = createSlice({
  name,
  initialState,
  reducer: {},
  extraReducers: {
    [addProject.pending]: (state, action) => {
      state.status = 'loading';
    },
    [addProject.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      // Add any fetched posts to the array
      state.data = action.payload;
    },
    [addProject.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default projectSlice.reducer;
