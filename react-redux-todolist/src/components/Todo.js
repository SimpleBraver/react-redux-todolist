import React from 'react'

const Todo = ({text,num}) => (
  <tr>
    <td>
      {num}
    </td>
    <td>
      {text}
    </td>
    <td>
      删除
    </td>
  </tr>
)

Todo.propTypes = {

}

export default Todo
