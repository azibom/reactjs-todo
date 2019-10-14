import React from 'react';
import Todo from './Todo'
import { connect } from 'react-redux'
import { toggleTodo } from './action'
import { MDBContainer } from 'mdbreact';

class ShowList extends React.Component {
    render() {
    let { todo, toggleTodo, filter } = this.props;
    let filterTodo = getVisibleTodos(todo, filter.status);
        return (
            <MDBContainer>
                    {filterTodo.map(oneTodo => 
                        <Todo key={oneTodo.id} oneTodo={oneTodo} onClick={() => toggleTodo(oneTodo.id)}/>
                    )}
            </MDBContainer>
        )
    }
}

const getVisibleTodos = (todos , filter) => {
    switch (filter) {
        case 'show_all':
            return todos
        case 'show_done':
            return todos.filter(todo => todo.complete === true)
        case 'show_underdone':
            return todos.filter(todo => todo.complete === false)
        default:
            return todos
    }
}

const mapStateToProps = state => {
    return {
        todo : state.todo,
        filter : state.filter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleTodo : id => dispatch(toggleTodo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowList);