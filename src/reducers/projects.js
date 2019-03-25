const projectInitialState = []

const projectsReducer = (state = projectInitialState, action) => {
    switch(action.type) {
        case "ADD_PROJECT" :
            return [...state, action.project]
        case 'REMOVE_PROJECT' :
            return state.filter(item => item.id !== action.id)
        default:
            return state
    }
}

export default projectsReducer