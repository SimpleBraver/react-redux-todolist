/**
 * Created by dev-002 on 16/11/3.
 */

import { connect } from 'react-redux'
import Todos from '../components/Todos.js'

const getVisibleTodos = (state) => {
    return state
}

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state)
})

const mapDispatchToProps = ({
})

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Todos)

export default VisibleTodoList