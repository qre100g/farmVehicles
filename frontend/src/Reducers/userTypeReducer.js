const userTypeReducer = (state = 'user', action) => {
    switch(action.type) {
        case 'typeChange' : return action.payload

        default: return state
    }
}

export default userTypeReducer;