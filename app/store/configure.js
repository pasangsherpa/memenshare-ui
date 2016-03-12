import { createStore } from 'redux';
import rootReducer from 'reducers';

export default function makeStore() {
  return createStore(rootReducer);
}
