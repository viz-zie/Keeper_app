import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Notes from './Notes'
import Footer from './Footer'

import '../src/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Notes/>
    <Notes/>
    <Notes/>
    <Notes/>
    <Notes/>
    <Notes/>
    <Footer/>
  </React.StrictMode>,
)
