import "./navigation.styles.scss";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div>
      <div className="navigation">
        <Link to="name">Name</Link>
        <Link to="number">Contact</Link>
      </div>
      <Outlet />
    </div>
  );
};

export { Navigation };
