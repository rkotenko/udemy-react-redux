// State argument is state for reducer, not react state
// this is set in reducers/index.js where a piece of state is connected to this reducer
// the function name is not needed to export but I like to use it so I clearly know what is what.

export default function ActiveBooksReducer(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  // default state is null as defined above as redux won't return undefined
  return state; // no change the the redux state at all
}