import { createReducer } from '../utils/redux';
import { ITEMS_LOAD_SUCCESS,
        ADD_ITEM_LOAD_SUCCESS,
        REMOVE_ITEM } from '../constants/actions';


const items = createReducer([],{
    [ITEMS_LOAD_SUCCESS](state,action){
        return action.items;
    },
    [ADD_ITEM_LOAD_SUCCESS](state,action){
        return [...state,action.item];
    },
    [REMOVE_ITEM](state,action){
        return state.filter( item => item.id !== action.id);
    }
});

export default items;