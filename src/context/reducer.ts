import {
    DEFAULT_QUNTITY,
    DEFAULT_STATE,
    HANDLE_MODAL,
    SELECT_QUNTITY,
} from './types'

export const reducer = (state: any, action: { type: string; payload: any }) => {
    console.log(action)
    switch (action.type) {
        case HANDLE_MODAL:
            return initialState
        case DEFAULT_STATE:
            return initialState
        case SELECT_QUNTITY:
            return { ...state, qty: { value: action.payload } }
        case DEFAULT_QUNTITY:
            return initialState
        default:
            return state
    }
}
