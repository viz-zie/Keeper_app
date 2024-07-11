import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Notes from './Notes'
import Footer from './Footer'

import '../src/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Notes noteheading="Data Structures" notecontent="Graphs need to be completed ASAP"/>
    <Notes noteheading="DBMS" notecontent="transactions need to be completed ASAP"/>
    <Notes noteheading="Operating Systems" notecontent="OSI model needs to be completed ASAP"/>
    <Notes noteheading="Computer Networks" notecontent="Network topology need to be completed ASAP"/>
    <Notes noteheading="React.js" notecontent="React hooks need to be completed ASAP"/>
    <Notes noteheading="Javascript" notecontent="Operators need to be completed ASAP"/>
    <Footer/>
  </React.StrictMode>,
)
