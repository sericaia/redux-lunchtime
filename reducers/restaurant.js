'use strict';

import { ADD_RESTAURANT, REMOVE_RESTAURANT, ADD_VOTE, REMOVE_VOTE } from '../actions/restaurant';

var initialState = [{
  id: 1,
  text: 'Oasis',
  votes: 5
}, {
  id: 2,
  text: 'Ilha da Madeira',
  votes: 10
}, {
  id: 3,
  text: 'Indiano',
  votes: 2
}];

export default function restaurant(state = initialState, action) {
  switch (action.type) {
  case ADD_RESTAURANT:
    return [{
      id: state.length + 1,
      text: action.text,
      votes: 0
    }, ...state];

  case REMOVE_RESTAURANT:
    return state.filter(restaurant => restaurant.id !== restaurant.id);

  case ADD_VOTE:
    return state.map(restaurant =>
      restaurant.id === action.id ?
        Object.assign({}, restaurant, { votes: restaurant.votes + 1 }) :
        restaurant
    );


//  case REMOVE_VOTE:

  default:
    return state;
  }
}
