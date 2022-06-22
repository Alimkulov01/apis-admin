import AdminListItem from "../../components/AdminListItem/AdminListItem"



const HomePage = ()=>{
	return(
		<div className="home-page">
			<AdminListItem
				name={'Erkinjon'}
				surname={'Foziljonov'}
				phoneNumber={'90 308 87 08'}
				WorkingTime={'Every day'}
				LastUsedTime={'12:32  PM'}
				Userid={0}
			/>
		</div>
	)
}

export default HomePage