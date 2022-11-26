import {combineReducers} from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import loginReducer from "@/store/reducers/loginReducer";

// ==============================< COMBINE REDUCER >============================== //

const reducers = combineReducers({
    customization: customizationReducer,
    login: loginReducer
});

export default reducers;
