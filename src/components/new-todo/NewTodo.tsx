import React, { useRef } from 'react';

import './NewTodo.css';

interface NewTodoProps {
    onAddTodo: (todoText: string) => void
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null);
    
    const cleanInputField = (input: React.RefObject<HTMLInputElement>) => {
        input.current!.value = "";
    }

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        // ! is there to guarantee to TS that the current isn't nullable, as we are certain
        const enteredText = textInputRef.current!.value;
        
        props.onAddTodo(enteredText);

        cleanInputField(textInputRef);
    }

    return <form onSubmit={ todoSubmitHandler }>
        <div className="form-control">
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text" id="todo-text" ref={textInputRef}/>
        </div>
        <button type="submit">ADD TODO</button>
    </form>
}

export default NewTodo;