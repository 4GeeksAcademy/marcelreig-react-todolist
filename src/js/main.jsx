import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Todo from './components/Todo';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>,
)
