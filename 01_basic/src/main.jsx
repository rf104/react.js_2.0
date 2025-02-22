import { StrictMode, React} from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const reactElement = React.createElement(
  'a',
  {
    href:'https://www.google.com',
    target:'_blank',
  },
  'Click Me'
)

createRoot(document.getElementById('root')).render(
  reactElement
)
