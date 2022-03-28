import React, { useState } from 'react';
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../actions';
import './Todo.css';

function Todo() {
  const [inputData, setInputData] = useState('');
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();
  return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <figcaption>Add your list here </figcaption>
        </figure>
        <div className="addItems">
          <input
            type="text"
            placeholder="Add items"
            value={inputData}
            onChange={(event) => setInputData(event.target.value)}
          />
          <FontAwesomeIcon
            icon={faPlus}
            className="fa fa-plus add-btn"
            onClick={() => dispatch(addTodo(inputData), setInputData(''))}
          />
        </div>
        <div className="showItems">
          {
                list.map((elem) => (
                  <div className="eachItem" key={elem.id}>
                    <h3>{elem.data}</h3>
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      className="far fa-trash-alt add-btn"
                      title="Delete Item"
                      onClick={() => dispatch(deleteTodo(elem.id))}
                    />
                  </div>
                ))
            }
        </div>
        <div className="showItems">
          <button
            type="button"
            className="btn effect04"
            onClick={() => dispatch(removeTodo())}
          >
            <span>Remove All</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
