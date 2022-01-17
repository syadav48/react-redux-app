import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userType"

const initialState = {
    loading: false,
    data: [],
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state, 
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return{
                ...state, 
                loading: false, 
                data: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return{
                ...state, 
                loading: false,
                data: [],
                error: action.payload
            }
    }
}

export default userReducer