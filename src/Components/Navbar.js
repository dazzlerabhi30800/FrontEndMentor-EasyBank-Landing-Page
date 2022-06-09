import React,{useState} from 'react';
import './Style.css' 


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(prevState => !prevState);
    }

    const linkClick = (e) => {
            e.target.classList.toggle('underline')    
    }
    return (
       <nav className='navbar'>
           <div className="logo--wrapper">
               <img src="../images/logo.svg" alt="logo-img" />
           </div>
           <ul className={click ? 'nav--list active' : 'nav--list'}>
               <li  onClick={linkClick} className="list--link">Home</li>
               <li  onClick={linkClick} className="list--link">About</li>
               <li onClick={linkClick} className="list--link">Contact</li>
               <li  onClick={linkClick} className="list--link">Blog</li>
               <li  onClick={linkClick} className="list--link">Careers</li>
           </ul>

           <div className="menu--btn">
               <i onClick={handleClick} className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
           </div>

           <div className="request-btn">Request Invite</div>
       </nav> 
    )
}


export default Navbar;