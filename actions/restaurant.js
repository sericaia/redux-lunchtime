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
    id
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

export function addVote(id) {
  return {
    type: ADD_VOTE,
    id
  };
}

export function removeVote() {
  return {
    type: REMOVE_VOTE
  };
}
