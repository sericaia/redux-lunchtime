import { ADD_RESTAURANT, REMOVE_RESTAURANT, ADD_VOTE, REMOVE_VOTE } from '../actions/restaurant';

var initialState = [{
  text: 'Oasis',
  votes: 0
}];

export default function restaurant(state = initialState, action) {
  switch (action.type) {
  case ADD_RESTAURANT:
    return [{
      text: action.text,
      votes: 0
    }, ...state];

  case REMOVE_RESTAURANT:
    return state.filter(restaurant => restaurant.text != restaurant.text);

  case ADD_VOTE:
    return state.map(restaurant =>
      restaurant.text === action.text ?
        Object.assign({}, restaurant, { votes: restaurant.votes + 1 }) :
        restaurant
    );


//  case REMOVE_VOTE:

  default:
    return state;
  }
}
