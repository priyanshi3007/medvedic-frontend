import {configureStore} from '@reduxjs/toolkit';
import data from './data';

const Store=configureStore({
    reducer:{
        Render: data
    }
})

export default Store;