import {combineReducers} from 'redux';

// import {navigationReducer, StateNavigation} from '../navigation/redux/reduces';
// import HomeReducer, {StateHome} from '../screens/home/home-redux/ReducerHome';
// import MainReducer, {StateMain} from '../screens/main/main-redux/ReducerMain';

export interface RootReducer {
  // navigation: StateNavigation;
  // homeLocation: StateHome;
  // mainReducer: StateMain;
}

const rootReducer = combineReducers({
  // navigation: navigationReducer,
  // homeLocation: HomeReducer,
  // mainReducer: MainReducer,
});

export default rootReducer;
