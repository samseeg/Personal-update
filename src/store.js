import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import reducer from "./ducks/users";

export default createStore(reducer, applyMiddleware(promise));
