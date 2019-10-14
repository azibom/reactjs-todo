import {combineReducers} from 'redux';
import {todo} from './todo';
import {filter} from './filter';

export default combineReducers({
    todo,
    filter
});