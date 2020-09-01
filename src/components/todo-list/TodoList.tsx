import React from 'react';

import './TodoList.css';

import { Todo } from '../../models/todo.model';

interface TodoListProps {
    items: Todo[];
    onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
    return <ul>
        { props.items.map(item => <li key={ item.id }>
            <span>{ item.text }</span>
            <button onClick={ () => props.onDeleteTodo(item.id) }>Delete</button>
        </li>)
        }
    </ul>
};

export default TodoList