import React from 'react'

export default function DataLoop({ todo, checkBox }) {    
    return (
        <div>
            <input type='checkbox' checked={todo.isComplete} onChange={() => checkBox(todo.id)} />
            { todo.name }
        </div>
    )
}