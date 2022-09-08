import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

function Header() {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamer
      </Link>
      <div className="right menu"></div>
      <Link to="/" className="item">
        All Stream
      </Link>
      <GoogleAuth />
    </div>
  );
}

export default Header;
