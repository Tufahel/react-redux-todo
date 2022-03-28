/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */

export const addTodo = (data) => ({
  type: 'ADD_TODO',
  payload: {
    id: new Date().getTime().toString(),
    data,
  },
});

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  id,
});

export const removeTodo = () => ({
  type: 'REMOVE_TODO',
});
