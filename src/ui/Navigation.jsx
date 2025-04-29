import { Link, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="app__nav container">
      <Link to={"/todos"}>Home</Link>

      <ul className="app__nav--items">
        <li>
          <NavLink
            to={"/responsive"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Cards
          </NavLink>
        </li>
        <li>
          <NavLink to={"/todos"} className={"active"}>
            Todos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
