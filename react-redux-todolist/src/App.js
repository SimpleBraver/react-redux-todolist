import React, { Component } from 'react'
import  './App.css'
import PageHead from './components/PageHead'

import { createStore } from 'redux'
import reducer from './reducers/index.js'
import AddTodo from './components/AddTodo.js'
import { Provider } from 'react-redux'

import TodoFiler from './containers/TodosFilter.js'

const store = createStore(reducer)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                  <div className="App">
                      <PageHead />
                      <AddTodo />
                      <TodoFiler />
                  </div>
            </Provider>
        );
    }
}

export default App;