import React from 'react'

export const AuthContext = React.createContext<any | null>(null)

type IProps = {
    children: React.ReactNode
}
const initialState: any = {
    todoList: [],
}

const actions = {
    ADD_TODO_ITEM: 'ADD_TODO_ITEM',
    REMOVE_TODO_ITEM: 'REMOVE_TODO_ITEM',
    TOGGLE_COMPLETED: 'TOGGLE_COMPLETED',
}

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case actions.ADD_TODO_ITEM:
            return {
                todoList: [
                    ...state.todoList,
                    {
                        id: new Date().valueOf(),
                        label: action.todoItemLabel,
                        completed: false,
                    },
                ],
            }
        case actions.REMOVE_TODO_ITEM: {
            const filteredTodoItem = state.todoList.filter(
                (todoItem: any) => todoItem.id !== action.todoItemId
            )
            return { todoList: filteredTodoItem }
        }
        case actions.TOGGLE_COMPLETED: {
            const updatedTodoList = state.todoList.map((todoItem: any) =>
                todoItem.id === action.todoItemId
                    ? { ...todoItem, completed: !todoItem.completed }
                    : todoItem
            )
            return { todoList: updatedTodoList }
        }
        default:
            return state
    }
}
const ContextProvider = ({ children }: IProps) => {
    const [openModal, setOpenModal] = React.useState<boolean>(false)
    const [state, dispatch] = React.useReducer(reducer, initialState)

    const value = {
        todoList: state.todoList,
        addTodoItem: (todoItemLabel: any) => {
            dispatch({ type: actions.ADD_TODO_ITEM, todoItemLabel })
        },
        removeTodoItem: (todoItemId: any) => {
            dispatch({ type: actions.REMOVE_TODO_ITEM, todoItemId })
        },
        markAsCompleted: (todoItemId: any) => {
            dispatch({ type: actions.TOGGLE_COMPLETED, todoItemId })
        },
    }
    return (
        <AuthContext.Provider value={{ openModal, setOpenModal }}>
            {children}
        </AuthContext.Provider>
    )
}

export default ContextProvider
