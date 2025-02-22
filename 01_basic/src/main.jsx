
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const anotherUser = 'Sajedullah Aref'


const reactElement = React.createElement(
  'a',
  {
    href:'https://www.google.com',
    target:'_blank',
  },
  'Click Me',
  // anotherUser, the variable will inject here!!
)

createRoot(document.getElementById('root')).render(
    <App/>
)
