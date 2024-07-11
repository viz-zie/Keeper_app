import '../src/Notes.css'

function Notes(props)
{
    return(
        <div className='note'>
            <h1>{props.noteheading}</h1>
            <p>{props.notecontent}</p>
        </div>
    )
}
export default Notes