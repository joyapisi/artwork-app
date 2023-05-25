import { NavLink } from 'react-router-dom';
import '../styles/nav.css';

function Navgtn() {
  return (
    <>
      <nav className="flex">
        <NavLink className="a" to="/"> </NavLink>
        <NavLink className="a" to="/Details" />
      </nav>
    </>
  );
}

export default Navgtn;
