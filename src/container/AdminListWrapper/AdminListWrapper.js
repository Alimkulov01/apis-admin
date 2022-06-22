
import axios from "axios";
import { useState , useEffect} from "react";
import AdminListItem from "../../components/AdminListItem/AdminListItem";
import './adminListWrapper.scss';


const AdminListWrapper =({ numberOfAdmins  })=>{

	const [ admin , setAdmin ] =useState([])
	const [] = useState()
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

	
	return(
		<div className="admin-list-wrapper">

			<div className="admin-list-wrapper-header">
				<div className="admin-list-wrapper-header__title"> Admins ({admin.length})</div>
				<button className="admin-list-wrapper-header-button">
					<span className="admin-list-wrapper-header-button__text">Admin qo`shish</span>
					<span className="admin-list-wrapper-header-button__icon">+</span>
				</button>
			</div>


			{
				admin.map((user)=>(
					<AdminListItem
						name={user.name}
						AdminImg={user}
						WorkingTime={'Every day'}
						LastUsedTime={'12:32  PM'}

					/>
				))
			}
		</div>
	)
}

export  default AdminListWrapper;





