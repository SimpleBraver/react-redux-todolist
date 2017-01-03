/**
 * Created by dev-002 on 16/11/1.
 */

import React from 'react'
import Todo from './Todo'

let Todos = ({todos}) => (
    <div>
        <table>
            <tbody>
                <tr>
                    <th>编号</th><th>内容</th><th>操作</th>
                </tr>
                {todos.map(todo =>
                <Todo
                key={todo.id}
                num={todo.id}
                {...todo}
                />
                )}
            </tbody>
        </table>
    </div>
)

export default Todos