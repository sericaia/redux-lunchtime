export const ADD_RESTAURANT = 'ADD_RESTAURANT';
export const REMOVE_RESTAURANT = 'REMOVE_RESTAURANT';
export const ADD_VOTE = 'ADD_VOTE';
export const REMOVE_VOTE = 'REMOVE_VOTE';

export function add(text) {
  return {
    type: ADD_RESTAURANT,
    text
  };
}

export function remove() {
  return {
    type: REMOVE_RESTAURANT,
    text //replace by id
  };
}

// export function addRestaurant(text) {
//   return (dispatch, getState) => {
//     const { permissions } = getState();
//
//     //TODO verify permissions
//
//     dispatch(add());
//   };
// }

export function addVote(text) {
  return {
    type: ADD_VOTE,
    text
  };
}

export function removeVote() {
  return {
    type: REMOVE_VOTE
  };
}
