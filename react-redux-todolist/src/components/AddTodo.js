/**
 * Created by dev-002 on 16/11/1.
 */


import React from 'react'
import { addTodo } from '../actions'
import { connect } from 'react-redux'


let AddTodo = ({ dispatch }) => {
    let input
    return (
        <div>
        <form onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
                return
            }
            dispatch(addTodo(input.value))
            input.value = ''
        }}>
            <input ref={node => {
                input = node
        }} />
            <button type="submit">
                Add Todo
            </button>
        </form>
        </div>
)
}


AddTodo = connect()(AddTodo)

export default AddTodo



/**
 *
 *
 <p id="p_title"><span>标题:&nbsp;</span><input type="text" placeholder="请输入标题"/></p>
 <p><span>内容:&nbsp;</span><textarea placeholder="请输入内容"></textarea></p>
 <button>&nbsp;保存&nbsp;</button>


 AddTodo = connect()(AddTodo)

 */