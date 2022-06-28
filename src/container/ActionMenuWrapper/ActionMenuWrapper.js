import { useState } from "react";
import ActionBtn from "../../components/ActionBtn/ActionBtn";
import './ActionMenuWrapper.scss';

const ActionMenuWrapper =({actionArr = []})=>{

	const  [state , setState] = useState(false)

	const actionMenuHandel = ()=>{
		setState(!state)
		hendlerFn()
	}

	
	const hendlerFn = (e)=>{
		const btn = document.querySelectorAll('.action-btn')
		btn.forEach(item => {
			item.classList.remove('active')
		})

		e.currentTarget.classList.add('active')
	}

	return(
		<div className="action-btn-wrapper">
			<button className="action-btn-wrapper__burger" onClick={actionMenuHandel}>
				<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g opacity="0.5">
					<path d="M12 13.5C12.5523 13.5 13 13.0523 13 12.5C13 11.9477 12.5523 11.5 12 11.5C11.4477 11.5 11 11.9477 11 12.5C11 13.0523 11.4477 13.5 12 13.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M12 6.5C12.5523 6.5 13 6.05228 13 5.5C13 4.94772 12.5523 4.5 12 4.5C11.4477 4.5 11 4.94772 11 5.5C11 6.05228 11.4477 6.5 12 6.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M12 20.5C12.5523 20.5 13 20.0523 13 19.5C13 18.9477 12.5523 18.5 12 18.5C11.4477 18.5 11 18.9477 11 19.5C11 20.0523 11.4477 20.5 12 20.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</g>
				</svg>
			</button>

			<div className={`action-btn ${ state ? 'active' : ''}`}>
				<span className='action-btn__before'>
					<svg width="25" height="20" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.411 7.40678C5.21215 7.69378 4.78784 7.69378 4.589 7.40678L0.347536 1.28475C0.117796 0.953146 0.355124 0.5 0.758534 0.5L9.24147 0.500001C9.64488 0.500001 9.8822 0.953147 9.65246 1.28475L5.411 7.40678Z" fill="white"></path></svg>
				</span>
				{
					actionArr.map((data , index)=>(
						<ActionBtn
							icon={data.icon}
							btnText={data.text}
							styleClassName={data.styleClassName}
							key={index}
							onClick={data.onClick}
							secondOnClick={actionMenuHandel}
						/>
					))
				}
			</div>
		</div>
	)
}

export default ActionMenuWrapper;