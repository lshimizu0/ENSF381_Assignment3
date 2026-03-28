import {Link} from "react-router-dom"

function NavBar(){
    return (
        <div className= 'navbar'>
            <Link to='/Home'>Home</Link>
            <Link to='/Flavours'>Flavours</Link>
            <Link to='/Login'>Log in</Link>
        </div>
    )
}

export default NavBar