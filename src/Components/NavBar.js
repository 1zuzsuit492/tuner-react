import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div className="NavBar">
        <button>
        <Link to="/new">New Song</Link>
        </button>
        </div>
    ) 
}

export default NavBar;