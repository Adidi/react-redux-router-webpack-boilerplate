import { combineReducers } from 'redux';
import items from './items';
import loading from './loading';
import error from './error';

const rootReducer = combineReducers({
    items,
    loading,
    error
});

export default rootReducer;