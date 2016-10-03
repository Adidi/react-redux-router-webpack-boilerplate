import { XHR_LOADING, XHR_ERROR } from '../constants/actions';

export const loading = () => ({type:XHR_LOADING});
export const error = error => ({type:XHR_ERROR, error});