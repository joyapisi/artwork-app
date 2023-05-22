import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/nav.css';
import {
    faArrowLeft,
  } from '@fortawesome/free-solid-svg-icons';
  

function Nav() {
    <>
      <nav className="flex">
        <div className="flex logo-header">
          <NavLink to="/" className="a">Home</NavLink>
            <FontAwesomeIcon icon={faArrowLeft} />
        </div>
          <h1>Art institute of Chicago</h1>
        <form className="flex logo-header">
          <label for="art-search">
            <input type="search" name="q" placeholder="Search Artwork"></input>
            <input type="submit"></input>
          </label>
        </form>
          {/* <NavLink to="/details" className="a">Details</NavLink> */}
      </nav>
    </>
 };
  
  export default Nav;