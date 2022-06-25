import { Link } from "react-router-dom";

import './sidebarBtn.scss';
import { useLocation } from "react-router-dom";

const SidebarBtn = ({path , name , icon, dataSet , settingsIcon ,onClick})=>{
	const location = useLocation();
	return (
    <Link
      to={path}
      className={`sidebarBtn ${path === location.pathname ?"active" : null}`}
      data-path={dataSet}
      onClick={onClick}
    >
      <span className="sidebarBtn__icon">{icon}</span>
      <span className="sidebarBtn__text">{name}</span>
      <span className="sidebarBtn__settingsIcon">{settingsIcon}</span>
    </Link>
  );
}

export default SidebarBtn;