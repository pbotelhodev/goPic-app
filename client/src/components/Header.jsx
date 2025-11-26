import { ROUTES } from "../routes";
import { Link } from "react-router-dom";
import LogoImg from "../assets/logo-GoPic.png";

const Header = ({ showButton = true }) => {
  return (
    <div className="nav-bar">
      <nav className="container-header">
        <div className="logo-area">
          <img className="img-logo" src={LogoImg} alt="logoGoPic" />
        </div>
        {showButton === true ? <div className="button-area">
          <Link to={ROUTES.CREATE_PARTY}>
            <button className="btn-header">Criar Festa</button>
          </Link>
        </div> : null}
        
      </nav>
    </div>
  );
};

export default Header;
