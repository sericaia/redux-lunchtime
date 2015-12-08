'use strict';

import { Map } from 'immutable';
import { ADD_RESTAURANT, REMOVE_RESTAURANT, ADD_VOTE, REMOVE_VOTE } from '../actions/restaurant';

let initialState = new Map({
0: { id: 0, text: 'Oasis', votes: 5},
1: { id: 1, text: 'Ilha da Madeira', votes: 10},
2: { id: 2, text: 'Indiano', votes: 2}});

export default function restaurant(state = initialState, action) {
  switch (action.type) {
    case ADD_RESTAURANT:
      return state.set(state.count().toString(), {
        id: state.count(),
        text: action.text,
        votes: 0
      }
    );

  case REMOVE_RESTAURANT:
    return state.delete(action.id);

  case ADD_VOTE:
    return state.update(action.id.toString(), (rest) => {
      rest.votes = rest.votes + 1;
      return rest;
    });

//  case REMOVE_VOTE:

  default:
    return state;
  }
}
