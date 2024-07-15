import '../src/Notes.css'

function Notes(props)
{
    return(
        <div className='note'>
            <h1>{props.heading}</h1>
            <p>{props.content}</p>
        </div>
    )
}
export default Notes