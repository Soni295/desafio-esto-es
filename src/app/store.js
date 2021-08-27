import { configureStore } from '@reduxjs/toolkit';

import projectSlice from '../reducers/projectSlice';
export default configureStore({
  reducer: {
    projects: projectSlice,
  },
});
