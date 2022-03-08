import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import mediaReducer from './reducers/media-reducers'

const rootReducer = combineReducers({
    media: mediaReducer,
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default store