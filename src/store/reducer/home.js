import { ADD_ITEM } from '../action/actionTypes'

const defaultState = {
  store_home_inputValue: '',
  store_home_list: []
}

const reducer = (state = defaultState, action) => {
  if (action.type === ADD_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    newState.store_home_inputValue = action.data;
    return newState;
  }
  return state
}

export default reducer