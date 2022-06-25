import axios from "axios";
import { useState , useEffect} from "react";
import AdminListItem from "../../components/AdminListItem/AdminListItem";
import './adminListWrapper.scss';
import CountUp from 'react-countup';

const AdminListWrapper =({ numberOfAdmins  })=>{

	const [ admin , setAdmin ] =useState([])
	const [currentPage , setCurrentPage] = useState(1)
	const [adminPerPage , setAdminPerPage] = useState(10)

	useEffect(()=>{
		axios
		.get('https://jsonplaceholder.typicode.com/users')
		.then((res)=>{
			console.log(res.data)
			setAdmin(res.data)
		})
		.catch((err)=>{
			console.log(err);
		})
		
	}, [])

	//  Get current list 

	const indexOfLastList = currentPage * adminPerPage;
	const indexOfFirstList = indexOfLastList - adminPerPage;
	const currentList = admin.slice(indexOfFirstList , indexOfLastList);

	// admin modal oppen function

	const [adminModal , setAdminModal] = useState(false)

	const AdminModalHandel =()=>{

	}
	
	return(
		<div className="admin-list-wrapper">

			<div className="admin-list-wrapper-header">
				<div className="admin-list-wrapper-header__title"> Admins (<CountUp start={0} end={admin.length} duration={0.9}/>)</div>
				
				<button className="admin-list-wrapper-header-button" onClick={AdminModalHandel}>
					<span className="admin-list-wrapper-header-button__text">Admin qo`shish</span>
					<span className="admin-list-wrapper-header-button__icon">+</span>
				</button>
			</div>

			<div className="admin-list-wrapper-bar">
				<div className="admin-list-wrapper-bar-item">
					<span className="admin-list-wrapper-bar-item__text">№</span>
					<span className="admin-list-wrapper-bar-item__text">Admins name</span>
				</div>
				<div className="admin-list-wrapper-bar-item">
					<span className="admin-list-wrapper-bar-item__text">Phone number</span>
				</div>
				<div className="admin-list-wrapper-bar-item">
					<span className="admin-list-wrapper-bar-item__text">Working time</span>
				</div>
				<div className="admin-list-wrapper-bar-item">
					<span className="admin-list-wrapper-bar-item__text">Last used time</span>
				</div>
			</div>

			{
				admin.map((user , index)=>(
					<AdminListItem
						name={user.name}
						AdminImg={user}
						WorkingTime={'Every day'}
						LastUsedTime={'12:32  PM'}
						key={index}
						Userid={index}
						

					/>
				))
			}
		</div>
	)
}

export  default AdminListWrapper;





