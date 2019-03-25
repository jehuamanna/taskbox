import { createStore, combineReducers } from 'redux'
import projectsReducers from '../reducers/projects'

const configureStore = () => {
    const store = createStore(combineReducers({
        projects: projectsReducers
    }))
    return store
}


export default configureStore