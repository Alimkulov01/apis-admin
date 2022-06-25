

import { Link } from 'react-router-dom';
import './GruhLIst.scss';


const GruhLIst = ({groupsId , groupsName , groupsTeacher , NumOfStudents ,lessonWeek ,lessonTime,  beginningDate , lessonTerm , endDate })=>{
	return(
		<div className="group-list" id={groupsId}>
			<div className="group-list-left">
				<span className='group-list-left__number'>{groupsId+1}</span>
				<div className="group-list-left-group">
					<Link to={`:${groupsId+1}`} className='group-list-left-group__name'>{groupsName}</Link>
					<span className='group-list-left-group__teacher'>{groupsTeacher}</span>
				</div>
			</div>

			<div className="group-list-students">
				<span className='group-list-students__text'>{NumOfStudents}</span>
			</div>

			<div className="group-list-lesson">
				<span className='group-list-lesson__week'>{lessonWeek}</span>
				<span className='group-list-lesson__time'>{lessonTime}</span>
			</div>
			<div className="group-list-beginning">
				<span className='group-list-beginning__date'>{beginningDate}</span>
				<span className='group-list-beginning__term'>{lessonTerm}</span>
			</div>
			<div className="group-list-end">
				<span className='group-list-end__text'>{endDate}</span>
			</div>
		</div>
	)
}

export default GruhLIst;