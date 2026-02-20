import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { Route, Routes, NavLink } from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)