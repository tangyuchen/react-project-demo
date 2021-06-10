import {ADD_ITEM} from './actionTypes'

const addTodoList = (data) => {
  return {
    type: ADD_ITEM,
    data
  }
}

export {addTodoList}