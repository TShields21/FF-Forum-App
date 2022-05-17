import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

// parameters: takes the initial state bc redux manages a global state for us
export default function configureStore(initialState = {}) {
    // reducers - take an incoming state and returns a new state

    // applyMiddleware - thunk is a JS enhancement that lets functions be passed around
    return createStore (
        reducers,
        initialState,
        applyMiddleware(thunk, axios.create(axiosMiddleware(client)))
    );
}

