import { combineReducers } from 'redux'
import TodoReducer from './MainPage/FormTable/TodoList/TodoReducer'
import MainRightPaneReducer from './MainPage/FormTable/MainRightPaneReducer'
import MainContainerReducer from './MainPage/MainContainerReducer'
import HousingReducer from './MainPage/FormTable/HousingInfo/HousingReducer'
import TopLinkReducer from './TopLinkReducer'
import MapContainerReducer from './MainPage/Maps/MapContainerReducer'
import GoogleMapReducer from './MainPage/Maps/GoogleMap/GoogleMapReducer'
import PatternsRightPaneReducer from './Patterns/RightPane/PatternsRightPaneReducer'
const todoApp = combineReducers({
  TodoReducer,
  MainRightPaneReducer,
  MainContainerReducer,
  TopLinkReducer,
  HousingReducer,
  MapContainerReducer,
  GoogleMapReducer,
  PatternsRightPaneReducer
})

export default todoApp