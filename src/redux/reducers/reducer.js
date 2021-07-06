const initialState = {
    count: 0,
    name: "Aaleen",
    age: 25
}

function reducer (state = initialState, action) {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1
            }
        case "DECREMENT":
            return {
                ...state,
                count: state.count - 1
            }
        case "CHANGENAME":
            return {
                ...state,
                name: action.name
            }
        default:
            return state;
    }
}

function mapStateToProps (state) {
    return state;
}

export {
    reducer,
    mapStateToProps
}