import { createStore, compose, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import reducers from "./app/redux/reducers";

const configureStore = () => {
  const store = createStore();
  return store;
};
export default configureStore;
