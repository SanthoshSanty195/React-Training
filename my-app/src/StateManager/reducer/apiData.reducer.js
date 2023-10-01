

const initialState = {
    localRegisteredData: null
}

export default (state = initialState, action={}) => {


    switch(action.type) {
        case 'API_DATA':
            return {
                ...state,
                localRegisteredData:action.data
            }
            default:
                return state
    }
} 