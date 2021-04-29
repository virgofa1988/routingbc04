import { applyMiddleware, combineReducers, createStore } from "redux";
import { PhimReducer } from "./reducers/PhimReducer";
import { NguoiDungReducer } from "./reducers/NguoiDungReducer";
import { LoadingReducer } from "./reducers/LoadingReducer";
import reduxThunk from "redux-thunk";
const rootReducer = combineReducers({
  //rootReducer là State tổng
  //Nơi chứa toàn bộ state của ứng dụng
  PhimReducer,
  NguoiDungReducer,
  LoadingReducer,
});
export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
