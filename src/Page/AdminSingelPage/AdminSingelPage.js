
import { Col, Divider, Row } from 'antd';
import axios from 'axios';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SingelAdmin.scss';

const AdminSingelPage = ({ match, id=1})=>{
	// 

	useEffect(()=>{

		axios
		.get(`http://192.168.0.140:8080/users/list/${id}`)
		.then((res)=>{
			console.log(res.data);
			console.log(window.location.pathname);
		})


	},[id])
	
	const location = useLocation()
	console.log(location.pathname.match);

	return(
		<div className="admin-singel-page">
				<div className="admin-singel-page-left">
						<div className="admin-singel-page-left-action">
							<button className="admin-singel-page-left-action__btn">
								<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect width="30" height="30" rx="5" fill="black" fill-opacity="0.05"/>
									<path d="M14.25 9H9C8.60218 9 8.22064 9.15804 7.93934 9.43934C7.65804 9.72064 7.5 10.1022 7.5 10.5V21C7.5 21.3978 7.65804 21.7794 7.93934 22.0607C8.22064 22.342 8.60218 22.5 9 22.5H19.5C19.8978 22.5 20.2794 22.342 20.5607 22.0607C20.842 21.7794 21 21.3978 21 21V15.75" stroke="#333333" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
									<path d="M19.875 7.87499C20.1734 7.57662 20.578 7.409 21 7.409C21.422 7.409 21.8266 7.57662 22.125 7.87499C22.4234 8.17336 22.591 8.57803 22.591 8.99999C22.591 9.42194 22.4234 9.82662 22.125 10.125L15 17.25L12 18L12.75 15L19.875 7.87499Z" stroke="#333333" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>

							</button>
							<button className="admin-singel-page-left-action__btn">
								<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect width="30" height="30" rx="5" fill="black" fill-opacity="0.05"/>
									<path d="M8.25 10.5H9.75H21.75" stroke="#333333" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
									<path d="M20.25 10.5V21C20.25 21.3978 20.092 21.7794 19.8107 22.0607C19.5294 22.342 19.1478 22.5 18.75 22.5H11.25C10.8522 22.5 10.4706 22.342 10.1893 22.0607C9.90804 21.7794 9.75 21.3978 9.75 21V10.5M12 10.5V9C12 8.60218 12.158 8.22064 12.4393 7.93934C12.7206 7.65804 13.1022 7.5 13.5 7.5H16.5C16.8978 7.5 17.2794 7.65804 17.5607 7.93934C17.842 8.22064 18 8.60218 18 9V10.5" stroke="#333333" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
									<path d="M13.5 14.25V18.75" stroke="#333333" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
									<path d="M16.5 14.25V18.75" stroke="#333333" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
							</button>
						</div>
						<div className="admin-singel-page-left-user">
							<div className="">
								<img src="" alt="" className='' id='user-img'/>
							</div>
							<div className="">
								<span	pan className='admin-singel-page-left-user__name'>Foziljonov Erkinjon</span>
								<span className='admin-singel-page-left-user__id'>ID:</span>
							</div>
						</div>
						<div className="admin-singel-page-left-info">
								<div className="admin-singel-page-left-info-item">
									<span className='admin-singel-page-left-info-item__status'>Telefon raqam</span>
									<span className='admin-singel-page-left-info-item__text'></span>
								</div>
								<div className="admin-singel-page-left-info-item">
									<span className='admin-singel-page-left-info-item__status'>E-mail</span>
									<span className='admin-singel-page-left-info-item__text'></span>
								</div>
								<div className="admin-singel-page-left-info-item">
									<span className='admin-singel-page-left-info-item__status'>Tug`ilgan kun</span>
									<span className='admin-singel-page-left-info-item__text'></span>
								</div>
								<div className="admin-singel-page-left-info-item">
									<span className='admin-singel-page-left-info-item__status'>Jinsi</span>
									<span className='admin-singel-page-left-info-item__text'></span>
								</div>
								<div className="admin-singel-page-left-info-item">
									<span className='admin-singel-page-left-info-item__status'>Manzil</span>
									<span className='admin-singel-page-left-info-item__text'></span>
								</div>
								<div className="admin-singel-page-left-info-item">
									<span className='admin-singel-page-left-info-item__status'>Ish kunlari</span>
									<span className='admin-singel-page-left-info-item__text'></span>
								</div>
						</div>

						<div className="">
							<div className=""></div>
							<div className=""></div>
						</div>
				</div>
				<div className="admin-singel-page-right">

				</div>
		</div>
	)
}

export default AdminSingelPage;