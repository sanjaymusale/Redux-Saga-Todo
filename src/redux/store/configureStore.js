import { createStore, applyMiddleware } from 'redux'
import todoReducer from '../reducers/todo';

import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
    const store = createStore(
        todoReducer,
        applyMiddleware(sagaMiddleware)
    )
    return store
}


export default configureStore