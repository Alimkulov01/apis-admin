import { Link } from "react-router-dom";

import './sidebarBtn.scss';
import { useLocation } from "react-router-dom";

const SidebarBtn = ({path , name , icon, dataSet})=>{
	const location = useLocation();
	return (
    <Link
      to={path}
      className={`sidebarBtn ${path === location.pathname ?"active" : null}`}
      data-path={dataSet}
    >
      <span className="sidebarBtn__icon">{icon}</span>
      <span className="sidebarBtn__text">{name}</span>
    </Link>
  );
}

export default SidebarBtn;