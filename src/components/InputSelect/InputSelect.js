import './InputSelect.scss';
import { Select } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const { Option } = Select;

const InputSelect = ({
	firsText = 'Kategoriya',
	GroupName= "Dasturlash",
	GroupCount="2 ta kurs"
})=>{

	const [selectOpen , setSelectOpen] =useState(false)

	const selectOppen = ()=>{
		setSelectOpen(!selectOpen)
		console.log(selectOpen);
	}


	return(
		<div className="inputSelect" onClick={selectOppen}>
			<div className="inputSelect-inner">
				<span className='inputSelect-inner__text'>{firsText}</span>
				<span className='inputSelect-inner__icon'><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
			</div>
			

			<div className={`inputSelect-menu ${selectOpen ? 'active' : ' ' }`}>
				<div className="inputSelect-menu-top">
					<span className='inputSelect-menu-top__icon'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.91659 2.53334C4.94345 2.53334 2.53325 4.94354 2.53325 7.91668C2.53325 10.8898 4.94345 13.3 7.91659 13.3C10.8897 13.3 13.2999 10.8898 13.2999 7.91668C13.2999 4.94354 10.8897 2.53334 7.91659 2.53334ZM0.833252 7.91668C0.833252 4.00466 4.00457 0.833344 7.91659 0.833344C11.8286 0.833344 14.9999 4.00466 14.9999 7.91668C14.9999 11.8287 11.8286 15 7.91659 15C4.00457 15 0.833252 11.8287 0.833252 7.91668Z" fill="#3661ED"/><path fillRule="evenodd" clipRule="evenodd" d="M13.6327 14.1667L12.5 13.034L13.034 12.5L14.1667 13.6327L13.6327 14.1667Z" fill="#3661ED"/><path fillRule="evenodd" clipRule="evenodd" d="M13.5549 13.555C13.8505 13.2594 14.3297 13.2594 14.6253 13.555L19.1666 18.0963L18.0962 19.1667L13.5549 14.6254C13.2594 14.3298 13.2594 13.8506 13.5549 13.555Z" fill="#3661ED"/></svg></span>
					<input className='inputSelect-menu-top__input' type="search" name="group" id="" placeholder='Qidirish'/>
				</div>
				<div className="inputSelect-menu-bottom">
					<div className="inputSelect-menu-bottom-btn">
						<span className='inputSelect-menu-bottom-btn__icon'>
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.00009 10.78L3.68676 8.46667C3.42676 8.20667 3.00676 8.20667 2.74676 8.46667C2.48676 8.72667 2.48676 9.14667 2.74676 9.40667L5.53342 12.1933C5.79342 12.4533 6.21342 12.4533 6.47342 12.1933L13.5268 5.14C13.7868 4.88 13.7868 4.46 13.5268 4.2C13.2668 3.94 12.8468 3.94 12.5868 4.2L6.00009 10.78Z" fill="#3661ED"/></svg>
						</span>
						<span className='inputSelect-menu-bottom-btn__text'>Barcha kategoriyalar</span>
					</div>

					<div className="inputSelect-menu-bottom-wrapper">
						<Link to={'#'} className="inputSelect-menu-bottom-wrapper-item">
							<span className="inputSelect-menu-bottom-wrapper-item__name">{GroupName}</span>
							<span className="inputSelect-menu-bottom-wrapper-item__count">{GroupCount}</span>
						</Link>
						<Link to={'#'} className="inputSelect-menu-bottom-wrapper-item">
							<span className="inputSelect-menu-bottom-wrapper-item__name">{GroupName}</span>
							<span className="inputSelect-menu-bottom-wrapper-item__count">{GroupCount}</span>
						</Link>
						<Link to={'#'} className="inputSelect-menu-bottom-wrapper-item">
							<span className="inputSelect-menu-bottom-wrapper-item__name">{GroupName}</span>
							<span className="inputSelect-menu-bottom-wrapper-item__count">{GroupCount}</span>
						</Link>
						<Link to={'#'} className="inputSelect-menu-bottom-wrapper-item">
							<span className="inputSelect-menu-bottom-wrapper-item__name">{GroupName}</span>
							<span className="inputSelect-menu-bottom-wrapper-item__count">{GroupCount}</span>
						</Link>
						<Link to={'#'} className="inputSelect-menu-bottom-wrapper-item">
							<span className="inputSelect-menu-bottom-wrapper-item__name">{GroupName}</span>
							<span className="inputSelect-menu-bottom-wrapper-item__count">{GroupCount}</span>
						</Link>
						<Link to={'#'} className="inputSelect-menu-bottom-wrapper-item">
							<span className="inputSelect-menu-bottom-wrapper-item__name">{GroupName}</span>
							<span className="inputSelect-menu-bottom-wrapper-item__count">{GroupCount}</span>
						</Link>
						<Link to={'#'} className="inputSelect-menu-bottom-wrapper-item">
							<span className="inputSelect-menu-bottom-wrapper-item__name">{GroupName}</span>
							<span className="inputSelect-menu-bottom-wrapper-item__count">{GroupCount}</span>
						</Link>
						<Link to={'#'} className="inputSelect-menu-bottom-wrapper-item">
							<span className="inputSelect-menu-bottom-wrapper-item__name">{GroupName}</span>
							<span className="inputSelect-menu-bottom-wrapper-item__count">{GroupCount}</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default InputSelect;

/*

select bosilganda =>{
	bazaga get zapros borishi kerak 
}

*/