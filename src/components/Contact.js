import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div className="grid">
            <br></br>
            <p>GitHub:</p>
            <a className="pb-5" href="https://github.com/rubanuelos">https://github.com/rubanuelos</a>
            <br></br>
            <Link to='/'>Go Back</Link>
        </div>
    )
}

export default Contact
