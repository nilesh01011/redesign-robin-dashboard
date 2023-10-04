import { combineReducers } from 'redux';
import themeSlices from './slices/themeSlices';

const rootReducer = combineReducers({
    theme: themeSlices,
});

export default rootReducer;