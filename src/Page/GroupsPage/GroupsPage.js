import CountUp from 'react-countup';
import GroupListWrapper from '../../container/GruhListWrapper';
import { Col, Row, Select } from 'antd';
import axios from 'axios';


import './GroupPage.scss';
import InputSelect from '../../components/InputSelect/InputSelect';


const GroupsPage = (url)=>{
	
	const { Option } = Select;

	const teacherSearchFunction = (teacher)=>{
		axios.get(url ,  )
	}


	return(
		<div className="group-page">
			<div className="group-page-header">
				<div className="group-page-header-left">
					Guruhlar (<CountUp start={0} end={100} duration={0.9}/>) 
				</div>
				<div className="group-page-header-right">
					<button className='group-page-header-right-button'>
						<span className='group-page-header-right-button__text'>Guruh qo`shish</span>
						<span className='group-page-header-right-button__icon'>+</span>
					</button>
				</div>
			</div>
			<Row className="group-page-search">
				<Col span={12}></Col>
				<Col span={12}>
					<form action="get" className='group-page-search-form'>
						<InputSelect/>
						
						<button className='group-page-search-form__button'>Search</button>
					</form>
				</Col>
			</Row>
			<div className="group-page-lists">
				<GroupListWrapper/>
			</div>
		</div>
	)
}

export default GroupsPage;