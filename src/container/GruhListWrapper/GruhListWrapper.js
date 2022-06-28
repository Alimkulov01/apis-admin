import './GruhListWrapper.scss';
import qs from 'qs';
import GruhLIst from '../../components/GruhLIst/GruhLIst';
import { Pagination } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'antd';

	const GrupListArr = [
		{
			id: 0,
			gruopName : 'HTML № 2 bootcamp',
			groupsTeacher : 'Muhammadjon Jumayev',
			NumOfStudents:  18,
			lessonWeek: 'Dushanba - Juma',
			lessonTime:'9:00 - 14:00',
			beginningDate: '27. 08. 2022' ,
			lessonTerm:'6 oy' ,
			endDate: '27. 01. 2023'
		},
		{
			id: 0,
			gruopName : 'HTML № 2 bootcamp',
			groupsTeacher : 'Muhammadjon Jumayev',
			NumOfStudents:  18,
			lessonWeek: 'Dushanba - Juma',
			lessonTime:'9:00 - 14:00',
			beginningDate: '27. 08. 2022' ,
			lessonTerm:'6 oy' ,
			endDate: '27. 01. 2023'
		},
		{
			id: 0,
			gruopName : 'HTML № 2 bootcamp',
			groupsTeacher : 'Muhammadjon Jumayev',
			NumOfStudents:  18,
			lessonWeek: 'Dushanba - Juma',
			lessonTime:'9:00 - 14:00',
			beginningDate: '27. 08. 2022' ,
			lessonTerm:'6 oy' ,
			endDate: '27. 01. 2023'
		},
		{
			id: 0,
			gruopName : 'HTML № 2 bootcamp',
			groupsTeacher : 'Muhammadjon Jumayev',
			NumOfStudents:  18,
			lessonWeek: 'Dushanba - Juma',
			lessonTime:'9:00 - 14:00',
			beginningDate: '27. 08. 2022' ,
			lessonTerm:'6 oy' ,
			endDate: '27. 01. 2023'
		},
		{
			id: 0,
			gruopName : 'HTML № 2 bootcamp',
			groupsTeacher : 'Muhammadjon Jumayev',
			NumOfStudents:  18,
			lessonWeek: 'Dushanba - Juma',
			lessonTime:'9:00 - 14:00',
			beginningDate: '27. 08. 2022' ,
			lessonTerm:'6 oy' ,
			endDate: '27. 01. 2023'
		},
		{
			id: 0,
			gruopName : 'HTML № 2 bootcamp',
			groupsTeacher : 'Muhammadjon Jumayev',
			NumOfStudents:  18,
			lessonWeek: 'Dushanba - Juma',
			lessonTime:'9:00 - 14:00',
			beginningDate: '27. 08. 2022' ,
			lessonTerm:'6 oy' ,
			endDate: '27. 01. 2023'
		},
		{
			id: 0,
			gruopName : 'HTML № 2 bootcamp',
			groupsTeacher : 'Muhammadjon Jumayev',
			NumOfStudents:  18,
			lessonWeek: 'Dushanba - Juma',
			lessonTime:'9:00 - 14:00',
			beginningDate: '27. 08. 2022' ,
			lessonTerm:'6 oy' ,
			endDate: '27. 01. 2023'
		},
		{
			id: 0,
			gruopName : 'HTML № 2 bootcamp',
			groupsTeacher : 'Muhammadjon Jumayev',
			NumOfStudents:  18,
			lessonWeek: 'Dushanba - Juma',
			lessonTime:'9:00 - 14:00',
			beginningDate: '27. 08. 2022' ,
			lessonTerm:'6 oy' ,
			endDate: '27. 01. 2023'
		},
	

	]
	

const GruhListWrapper = ()=>{
	// const [data, setData] = useState();
	// const [loading, setLoading] = useState(false);
	// const [pagination, setPagination] = useState({
	// 	current: 1,
	// 	pageSize: 20,
	// });
	
	// const getRandomuserParams = (params) => ({
	// 	results: params.pagination?.pageSize,
	// 	page: params.pagination?.current,
	// 	...params,
	// });
	// const fetchData = (params)=>{
	// 	setLoading(true);
	// 	fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(params))}`)
	// 	.then((res)=> res.json())
	// 	.then(({results})=>{
	// 		setData(results);
	// 		setLoading(false);
	// 		setPagination({
	// 			...params.pagination,
	// 			total: 50,
	// 		});
	// 	})
	// }
	// console.log(data);
	// useEffect(() => {
		
	// 	fetchData({
	// 	pagination,
			
	// 	});
	// }, []);
	// const handleTableChange = (newPagination, filters, sorter) => {
	// 	fetchData({
	// 	sortField: sorter.field,
	// 	sortOrder: sorter.order,
	// 	pagination: newPagination,
	// 	...filters,
	// 	});
	// };
	
	// const columns = [
	// 	{
	// 	  title: 'Name',
	// 	  dataIndex: 'name',
	// 	  sorter: true,
	// 	  render: (name) => `${name.first} ${name.last}`,
	// 	  width: '20%',
	// 	},
	// 	{
	// 	  title: 'Gender',
	// 	  dataIndex: 'gender',
	// 	  filters: [
	// 		{
	// 		  text: 'Male',
	// 		  value: 'male',
	// 		},
	// 		{
	// 		  text: 'Female',
	// 		  value: 'female',
	// 		},
	// 	  ],
	// 	  width: '20%',
	// 	},
	// 	{
	// 	  title: 'Email',
	// 	  dataIndex: 'email',
	// 	},
	// ];
	return(
		<div className="gruh-list-wrapper">
			{
				GrupListArr.map((data , index)=>(
					<GruhLIst
						groupsId={data.id}
						groupsName={data.gruopName}
						groupsTeacher={data.groupsTeacher}
						NumOfStudents={data.NumOfStudents}
						lessonWeek={data.lessonWeek}
						lessonTime={data.lessonTime}
						beginningDate={data.beginningDate}
						lessonTerm={data.lessonTerm}
						endDate={data.endDate}
						key={index}
					/>
				))
			}
			<div className="gruh-list-wrapper-pagination">
				
			</div>
		</div>
	)
}

// ant-pagination-options
export default GruhListWrapper;