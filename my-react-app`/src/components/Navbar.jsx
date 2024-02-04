import './MyStyle.css'
import { Link } from 'react-router-dom';
export default function Navbar(){
    return (
        <div className='nav-main' >
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/one">Page1</Link>
            <Link className='link' to="/two">Page2</Link>
        </div>
    )
}