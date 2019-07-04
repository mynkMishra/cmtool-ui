import {createStore, applyMiddleware} from 'redux'
import {rootReducer} from '../reducers'

import {middleware} from '../middleware'

const Middleware = applyMiddleware(...middleware)

const store = createStore(rootReducer ,Middleware)

export default store