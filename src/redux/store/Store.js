import { legacy_createStore, combineReducers} from 'redux'
import productReducer from '../reducer/productReducer';

const rootReducer = combineReducers({productReducer});

const store = legacy_createStore(rootReducer);

export default store;