import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
        <a>
          <Link to="/">
            Logo
          </Link>
        </a>
        </div>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link>Add Post</Link></li>
            </ul>
        </div>
        <div>
            <a><Link to="/login">Login</Link></a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
