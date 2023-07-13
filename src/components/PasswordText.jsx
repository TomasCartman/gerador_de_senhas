import './PasswordText.css'
import { FiCopy } from 'react-icons/fi'

export default function PasswordText(props) {
    function copyText() {
        navigator.clipboard.writeText(props.children)
    }

    return (
        <div className="pass-container">
            <span className='password'>{props.children}</span>
            <span className='icon'>
                <FiCopy onClick={() => copyText()} />
            </span>
        </div>
    )
}