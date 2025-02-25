import {configureStore} from '@reduxjs/toolkit';
import rootReducers from './reducer';
const store = configureStore({
    reducer: rootReducers,

})

export default store;

// src/redux/store.js
// import { createStore } from 'redux';
// import rootReducer from '../reducers'; // Corrected path

// const store = createStore(
//   rootReducer,
//   // You can add Redux DevTools if you'd like for easier debugging
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;
