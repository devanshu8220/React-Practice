import React from 'react';

export default function Card(props) {
  return (
    <div>
      <div>
        <ul>
          {props.todo.map((todo, index) => (
            <li key={index}>
              <input type='checkbox' id={`checkbox${index}`} />
              <label htmlFor={`checkbox${index}`}>{todo}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

