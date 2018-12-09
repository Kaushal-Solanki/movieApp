import { MOVIES } from '../actions'


const movieReducer = (state = [], action) => {
  switch (action.type) {
    case MOVIES:

      console.log('chk reducers', state, action)
      return action.items

    default:
      return state

  }
}

export default movieReducer;
