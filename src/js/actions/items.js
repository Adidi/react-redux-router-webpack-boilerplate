import { loading, error } from './xhr';
import Api from '../utils/api';
import { ITEMS_LOAD_SUCCESS,
    ADD_ITEM_LOAD_SUCCESS,
    REMOVE_ITEM } from '../constants/actions';

const itemsLoadSuccess = items => ({type:ITEMS_LOAD_SUCCESS ,items});
const addItemLoadSuccess = item => ({type:ADD_ITEM_LOAD_SUCCESS ,item});

export const loadItems = () => async dispatch => {
    dispatch(loading());
    try{
        let items = await Api.loadItems();
        dispatch(itemsLoadSuccess(items));
    }
    catch(err){
        dispatch(error(err));
    }
};

export const addItem = text => async dispatch => {
    dispatch(loading());
    try{
        let item = await Api.addItem(text);
        dispatch(addItemLoadSuccess(item));
    }
    catch(err){
        dispatch(error(err));
    }
};

export const removeItem = id => ({type:REMOVE_ITEM, id});