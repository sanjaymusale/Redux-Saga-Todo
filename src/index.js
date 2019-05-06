import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import configureStore from './redux/store/configureStore';
import { sagaMiddleware } from './redux/store/configureStore'
import todoSaga from './redux/sagas/todoSaga'

const store = configureStore()
sagaMiddleware.run(todoSaga)

store.subscribe(() => {
    console.log('state', store.getState())
})
const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

