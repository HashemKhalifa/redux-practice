import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {
  offers: {
    items: [],
    sortType: 'name',
    search: '',
    error: '',
  },
};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware)),
);

export default store;
