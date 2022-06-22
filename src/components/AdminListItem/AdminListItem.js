import { Modal } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Adlist.scss'



const AdminListItem = ({ AdminImg,name  ,surname, phoneNumber, WorkingTime , LastUsedTime , Userid})=>{

	const [ adminState , setAdminState ] =useState(false)

	const AdminHandelAction =()=>{
		setAdminState(!adminState)
		console.log(adminState);
	}
	const [delateSstate, setDelateSstate] = useState(false)

	const  openMoal =(e)=>{
		e.preventDefault()
		setDelateSstate(!delateSstate)
		console.log('ochildi');
	} 
	return(

		
		
		<div  className="admin-list" id={Userid+1}>
			<div className="admin-list-left">
				<div className="admin-list-left__index">
					{Userid+1}
				</div>
				<div className="admin-list-left-img">
					<img className="admin-list-left-img__item" src={AdminImg} alt=""/>
				</div>
				<Link to={':userId'} className="admin-list-left-name">
					<span className="admin-list-left-name__text">{surname}</span>
					<span className="admin-list-left-name__text">{name}</span>
				</Link>
			</div>
			<div className="admin-list-number">
				<span className="admin-list-number__text">{phoneNumber}</span>
			</div>
			<div className="admin-list-workDay">
				<span className="admin-list-workDay__text">
					{WorkingTime}
				</span>
			</div>
			<div className="admin-list-lastWorkingTime">
				<span className="admin-list-lastWorkingTime__text">
					{LastUsedTime}
				</span>
			</div>

			<button className="admin-list-action" onClick={AdminHandelAction}>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g opacity="0.5">
					<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</g>
				</svg>

				<div className={`admin-list-action-menu ${adminState ? 'active' : ''}`}>
				<span className="admin-list-action-before"><svg width="25" height="20" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.411 7.40678C5.21215 7.69378 4.78784 7.69378 4.589 7.40678L0.347536 1.28475C0.117796 0.953146 0.355124 0.5 0.758534 0.5L9.24147 0.500001C9.64488 0.500001 9.8822 0.953147 9.65246 1.28475L5.411 7.40678Z" fill="white"/></svg></span>
					<Link to={'#'}  className="admin-list-action-menu-button" id="">
						<span className="admin-list-action-menu-button__icon">
							<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.75 5.56775L14.25 7.06775V3.5H7.50002V7.25H3.75002V15.5H14.25V13.4323L15.75 11.9323V16.256C15.7498 16.4534 15.6713 16.6426 15.5316 16.7821C15.392 16.9216 15.2027 17 15.0053 17H2.99477C2.89628 16.9993 2.79888 16.9792 2.70815 16.9409C2.61742 16.9026 2.53513 16.8468 2.46597 16.7766C2.39681 16.7065 2.34215 16.6234 2.30509 16.5322C2.26804 16.4409 2.24933 16.3432 2.25002 16.2448V6.5L6.75227 2H14.9985C15.4125 2 15.75 2.34125 15.75 2.744V5.56775ZM16.3335 7.10525L17.394 8.1665L11.5605 14L10.4985 13.9985L10.5 12.9395L16.3335 7.106V7.10525Z" fill="#037A4A"/></svg>
						</span>
						<span className="admin-list-action-menu-button__text edit">Edit</span>
					</Link>
					<Link to={'#'} className="admin-list-action-menu-button" id="" onClick={openMoal}>
						<span className="admin-list-action-menu-button__icon">
							<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.25 3.50003V2.00003H12.75V3.50003H16.5V5.00003H15V16.25C15 16.4489 14.921 16.6397 14.7803 16.7804C14.6397 16.921 14.4489 17 14.25 17H3.75C3.55109 17 3.36032 16.921 3.21967 16.7804C3.07902 16.6397 3 16.4489 3 16.25V5.00003H1.5V3.50003H5.25ZM4.5 5.00003V15.5H13.5V5.00003H4.5ZM6.75 7.25003H8.25V13.25H6.75V7.25003ZM9.75 7.25003H11.25V13.25H9.75V7.25003Z" fill="#CB0D0D"/></svg>
						</span>
						<span className="admin-list-action-menu-button__text delate">Delete</span>
					</Link>
				</div>
			</button>

			
		
		</div>
	)
}

export default AdminListItem;