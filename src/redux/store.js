import {applyMiddleware, createStore,combineReducers} from 'redux'
import countReducer from './Reducers/countReducer'
import personReucer from './Reducers/person'
import thunk from 'redux-thunk'

const allReducers=combineReducers({
    count:countReducer,
    people:personReucer
})
export default createStore(allReducers,applyMiddleware(thunk))