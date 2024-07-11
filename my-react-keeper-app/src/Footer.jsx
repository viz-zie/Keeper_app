import '../src/Footer.css'

const d = new Date();
let cpyrtyear = d.getFullYear();

function Footer()
{
    return (
        <div className="footer">
        <p>Copyright@{cpyrtyear}</p>
        </div>
    )
}

export default Footer