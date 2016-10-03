import { XHR_LOADING } from '../constants/actions';


export default (state = false,action) => {
    let { type } = action;
    if(type === XHR_LOADING){
        return true;
    }
    else if(type.endsWith('LOAD_SUCCESS')){
        return false;
    }

    return state;
};