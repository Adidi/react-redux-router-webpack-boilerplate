import { XHR_ERROR } from '../constants/actions';


export default (state = null,action) => {
    let { type } = action;
    if(type === XHR_ERROR){
        return action.error;
    }

    return state;
};