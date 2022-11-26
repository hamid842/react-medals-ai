// third party
import {createEpicMiddleware} from "redux-observable";
import {configureStore} from "@reduxjs/toolkit";
import thunk from 'redux-thunk'

// project imports
import * as actions from "./actions";
import epics from "./epics";
import reducers from "./reducers";

const epicMiddleware = createEpicMiddleware();

// Create store
const store = configureStore({
    reducer: reducers,
    middleware:[thunk,epicMiddleware]
});

// @ts-ignore
epicMiddleware.run(epics);

export {store, actions};




