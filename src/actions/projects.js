//Add Project
export const addProject = (project) => {
    return {
        type: 'ADD_PROJECT',
        project
    }
}
//Edit Project

//Remove Project

export const removeProject = (id) => {
    return {
        type: 'REMOVE_PROJECT',
        id
    }
}
