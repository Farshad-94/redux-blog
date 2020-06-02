
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
}

  // BAD:
  // return document.getElementById('input');
  //
  // BAD:
  // return axios.get('./url')

  // BAD (mutation) 
  // state[0]='sam'   state.age = 30
  // state.pop()
  // state.push()

  // not return same state - redux will not be re-rendered, no updates would take place
  // from redux code base for combineReducer method: (https://github.com/reduxjs/redux/blob/master/src/combineReducers.ts)
  //
  //   let hasChanged = false
  //   const nextState: StateFromReducersMapObject<typeof reducers> = {}
  //   for (let i = 0; i < finalReducerKeys.length; i++) {
  //     const key = finalReducerKeys[i]
  //     const reducer = finalReducers[key]
  //     const previousStateForKey = state[key]
  //     const nextStateForKey = reducer(previousStateForKey, action)
  //     if (typeof nextStateForKey === 'undefined') {
  //       const errorMessage = getUndefinedStateErrorMessage(key, action)
  //       throw new Error(errorMessage)
  //     }
  //     nextState[key] = nextStateForKey
  //     hasChanged = hasChanged || nextStateForKey !== previousStateForKey
  //   }
  //   hasChanged =
  //     hasChanged || finalReducerKeys.length !== Object.keys(state).length
  //   return hasChanged ? nextState : state
  // }

  // HOW TO RETURN:
  //
  //removing an element:
  // bad:                    good: 
  // state.pop()              state.filter(element => element !== 'hi')
  // state.push('hi')        [...state, 'hi']
  // state[0] =  'hi'        state.map(element => element === 'hi' ? 'bye' : element)
  //
  // state.name = 'sam'      { ...state, name: 'sam' }
  // state.age = 30          { ...state, age: 30 }
  // delete state.name       { ...state, age: undefined}  _.omit(state, 'age')