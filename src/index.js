import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import {Provider} from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import {loadState, saveState} from './localStorage'

const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
  });
const persistedState = loadState()
const store = createStore(reducer, persistedState, composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
  ));

store.subscribe(()=>{
    saveState({
        todos: store.getState().todos
    })
})

console.log(store.getState());
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
 document.getElementById('root'));
registerServiceWorker();
