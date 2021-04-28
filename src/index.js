import {StrictMode} from 'react'
import {render} from 'react-dom'
import axios from 'axios'
import './index.css'
import App from './App'

axios.defaults.baseURL = 'https://vit-backend-coffee.herokuapp.com/'
if(localStorage.getItem('token')) axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
