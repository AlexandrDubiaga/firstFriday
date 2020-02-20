import reducerLogin from "./reducerLogin";
import reducerProfile from "./reducerProfile";
import reducerRecovery from "./reducerRecovery";
import reducerRegister from "./reducerRegister";
import thunk, {ThunkMiddleware} from "redux-thunk";
import {combineReducers, createStore, applyMiddleware} from "redux";

let rootReducer= combineReducers({
    login:reducerLogin,
    profile:reducerProfile,
    recovery:reducerRecovery,
    register:reducerRegister
})

export type AppState = ReturnType<typeof rootReducer>

let store = createStore(rootReducer,applyMiddleware(thunk as ThunkMiddleware<AppState,any>));
export default store;