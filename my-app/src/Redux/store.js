import {compose, createStore} from 'redux'
import { reducer } from './reducer'


const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(reducer,createComposer())
