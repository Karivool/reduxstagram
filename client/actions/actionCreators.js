// increment likes action
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index //ES6. No need to repeat if both are same
  };
}

// add comments action
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  };
}

// remove comments action

export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  };
}
