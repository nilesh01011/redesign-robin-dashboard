import { combineReducers } from "redux";
import themeSlices from "./slices/themeSlices";
import recentlyViewSlices from "./slices/recentlyViewSlices";

const rootReducer = combineReducers({
  theme: themeSlices,
  recentlyView: recentlyViewSlices,
});

export default rootReducer;
