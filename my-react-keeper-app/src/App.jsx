import React from 'react'
import Header from '../src/Header'
import Notes from '../src/Notes'
import Footer from '../src/Footer'
import notes from '../src/notesinfo'


function App()
{
    return(
        <div>
        <Header/>
        {notes.map(notes => <Notes key={notes.id} heading={notes.heading} content = {notes.content}/>)}
        <Footer/>
        

        </div>
    )
}

export default App;