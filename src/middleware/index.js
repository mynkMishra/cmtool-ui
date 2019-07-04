import thunkMiddleware from 'redux-thunk';


/**
 * middle to provide redux Thunk support for async actions.
 */
export const middleware = [
    thunkMiddleware
]