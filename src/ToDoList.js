import React from "react"
import DataLoop from "./DataLoop"

export default function TodoList({ todos, checkBox }) {
    // can return HTML in JSX, but it MUST MUST MUST be contained in one element
    return (
            todos.map( todo => {
                return <DataLoop key={todo.name} checkBox={checkBox} todo={todo} />
            })
    )
}