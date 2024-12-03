import { createContext, useReducer, Dispatch } from "react";
import users from "../data/users";

const initialState = {users}
const UsersContext = createContext({} as any);

const actions = {
    deleteUser(state: any, action: any) {
        const payloadUser = action.payload
        return {
            ...state,
            users: state.users.filter((user: any) => user.id !== payloadUser.id)
        }
    },
    addUser(state: any, action: any) {
        return {
            ...state,
            users: [...state.users, {
                id: Math.random(),
                ...action.payload
            }]
        }
    },
    updateUser(state: any, action: any) {
        return {
            ...state,
            users: state.users.map((user: any) => {
                return user.id === action.payload.id ? action.payload : user
            })
        }
    }
}

export const UsersProvider = (props: any) => {

    type ActionType = { type: keyof typeof actions, payload: any };

    function reducer(state: any, action: ActionType) {
        const fn = actions[action.type]
        return fn ? fn(state, action) : state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UsersContext.Provider
            value={{
                state, dispatch
            }}
        >
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext;