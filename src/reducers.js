import { combineReducers } from 'redux'
import globalReducer from "./_duck/reducers";

const rootReducer = combineReducers({
  global: globalReducer
})

export default rootReducer