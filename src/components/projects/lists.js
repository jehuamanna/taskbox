import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {removeProject} from '../../actions/projects'

const ProjectList = (props) => {
    return (
        <div>
            <h2> Listing Projects - {props.projects.length} </h2>
            <ul>
                {props.projects.map(project => {
                    return <li key={project.id}>{project.name}
                    <button onClick={() => {
                        const confirmDelete = window.confirm("Are you sure?")
                        if(confirmDelete) {
                            props.dispatch(removeProject(project.id))
                        }
                    }}>delete</button>
                    </li>
                })}
            </ul>

            <Link to='/project/new'> Add Project </Link>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps)(ProjectList)