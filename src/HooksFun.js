
import React, { useReducer, useRef, useState } from "react"
import { useThemeCSS } from "./ThemeContext";
import Todo from "./Todo";
import useCustomLog from "./useCustomLog";
import HOC from './HOC';

export const NOTES = {
    ADD_NOTES: "add",
    DELETE_NOTES: "delete",
    COMPLETE_NOTES: "complete"
}

function Hooks() {

    const darkThemes = useThemeCSS();

    const triggerCalc = (vaultMoney, action) => {
        if (action.type === "buy") {
            return { money: vaultMoney.money - 10 }
        }
        else if (action.type === "order") {
            return { money: vaultMoney.money + 10 }
        }
        else if (action.type === "jackpot") {
            return { money: vaultMoney.money + 10000000000000 }
        }
    }

    const [vaultMoney, vaultReducer] = useReducer(triggerCalc, { money: 0 });

    const todoConfig = (todoList, action) => {

        switch (action.type) {
            case NOTES.ADD_NOTES: {
                return [...todoList, addTodo(action.payload.name)]
            }
            case NOTES.COMPLETE_NOTES: {
                return todoList.map((todo)=> {
                    if(todo.id === action.payload.id) {
                        return {...todo, complete: !todo.complete}
                    }
                    return todo
                }
                )
            }
            case NOTES.DELETE_NOTES:{
                return todoList.filter( (x) => 
                x.id !== action.payload.id)
            }
            default:
                return todoList
        }


    }

    function addTodo(name) {
        return { id: Date.now(), name: name, complete: false }
    }

    const [todoList, listhandler] = useReducer(todoConfig, [])
    const [todoInput, setTodoInput] = useState('')

    const submitNotes = (e) => {

        e.preventDefault();
        listhandler({ type: NOTES.ADD_NOTES, payload: { name: todoInput } })
        setTodoInput('')
    }

    useCustomLog(todoList)

    const inputRef= useRef();

    const focusInput=()=>{
        inputRef.current.focus()
    }

    return (
        <div style={darkThemes}>

            <div className="reducer" style={{ textAlign: "center" }}>

                <h1>Expense Tracker</h1>

                <h2>Vault Balance: {vaultMoney.money}</h2>

                <hr style={{ width: "50%" }} />


                <button onClick={() => vaultReducer({ type: "order" })}>Meal Order</button>

                <button onClick={() => vaultReducer({ type: "buy" })}>Buy Groceries</button>

                <button onClick={() => vaultReducer({ type: "jackpot" })}>Jackpot</button>

            </div>


            <div className="todos" style={{ textAlign: "center" }}>
                <h1>Todo Items</h1>
                <div className="todo-content">
                    <form onSubmit={submitNotes}>
                        <input ref={inputRef} style={{ width: "30%", padding: "10px 30px", fontSize: "22px" }} type="text" name="todo" placeholder="ToDos..." value={todoInput} onChange={(e) => { setTodoInput(e.target.value) }} />
                        <button type="button" onClick={focusInput}>Todo</button>
                    </form>
                    {todoList.map(item => {
                        return <Todo key={item.id} task={item} listhandler={listhandler} />
                       
                    })}

                </div>
            </div>

            <HOC />

        </div>
    )

}

export default Hooks;