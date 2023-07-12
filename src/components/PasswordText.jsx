import './PasswordText.css'
import { FiCopy } from 'react-icons/fi'

export default function PasswordText(props) {
    return (
        <div className="pass-container">
            <span className='password'>{props.children}</span>
            <FiCopy className='icon' />
        </div>
    )
}