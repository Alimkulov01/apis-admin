import SidebarBtn from "../../components/SidebarBtn/SidebarBtn";
import './sideBar.scss';

const SideBar  =({logo})=>{


	
	return(
		<div className="sidebar">
			<div className="sidebar-logo">
				<img src={logo} alt="logo" />
			</div>
			<div className="sidebar-menu">
				<SidebarBtn
					icon={
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" fill="black"/></svg>
					}
					name={'Dashboard'}
					path={'/'}
				/>
				<SidebarBtn
					icon={
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M9.34933 14.8577C5.38553 14.8577 2 15.47 2 17.9174C2 20.3666 5.364 21 9.34933 21C13.3131 21 16.6987 20.3877 16.6987 17.9404C16.6987 15.4911 13.3347 14.8577 9.34933 14.8577Z" fill="black"/>
							<path opacity="0.4" d="M9.34935 12.5248C12.049 12.5248 14.2124 10.4062 14.2124 7.76241C14.2124 5.11865 12.049 3 9.34935 3C6.65072 3 4.48633 5.11865 4.48633 7.76241C4.48633 10.4062 6.65072 12.5248 9.34935 12.5248Z" fill="black"/>
							<path opacity="0.4" d="M16.1735 7.84873C16.1735 9.19505 15.7606 10.4513 15.0365 11.4948C14.9612 11.6021 15.0277 11.7468 15.1588 11.7698C15.3408 11.7995 15.5277 11.8177 15.7185 11.8216C17.6168 11.8704 19.3203 10.6736 19.791 8.87116C20.4886 6.19674 18.4416 3.79541 15.834 3.79541C15.5512 3.79541 15.2802 3.82416 15.016 3.87686C14.9798 3.88453 14.9406 3.90177 14.9211 3.93244C14.8956 3.97172 14.9142 4.02251 14.9397 4.05605C15.7234 5.13214 16.1735 6.44205 16.1735 7.84873Z" fill="black"/>
							<path d="M21.7792 15.1694C21.4318 14.444 20.5933 13.9467 19.3173 13.7023C18.7156 13.5586 17.0854 13.3545 15.5698 13.3832C15.5473 13.3861 15.5346 13.4014 15.5326 13.411C15.5297 13.4263 15.5365 13.4493 15.5659 13.4656C16.2665 13.8049 18.9739 15.2805 18.6334 18.3929C18.6187 18.5289 18.7293 18.6439 18.8673 18.6248C19.5336 18.5318 21.2479 18.1706 21.7792 17.0475C22.0737 16.4534 22.0737 15.7635 21.7792 15.1694Z" fill="black"/>
						</svg>

					}
					name={'Admins'}
					path={'/admins'}
					dataSet={'/admins'}
				/>
				<SidebarBtn
					icon={
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15.3131 4C15.2659 4.243 15.2423 4.49001 15.2428 4.73756C15.2428 6.95855 17.0459 8.75902 19.2702 8.75902C19.5151 8.75782 19.7594 8.73431 20 8.68878V16.6615C20 20.0156 18.0215 22 14.6624 22H7.34636C3.97851 22 2 20.0156 2 16.6615V9.3561C2 6.00195 3.97851 4 7.34636 4H15.3131ZM15.434 9.99426L15.3167 10.0016C15.1211 10.0297 14.9453 10.1358 14.8295 10.2956L12.4201 13.3951L9.6766 11.2351C9.51997 11.1131 9.32071 11.0592 9.12381 11.0856C8.92691 11.1121 8.74898 11.2166 8.63019 11.3756L5.67562 15.1863C5.57177 15.3158 5.51586 15.4771 5.51734 15.6429L5.51994 15.7533C5.54858 16.0433 5.74748 16.2939 6.03238 16.3838C6.35288 16.485 6.70138 16.3573 6.88031 16.0732L9.35125 12.8771L12.0948 15.0283C12.2508 15.1541 12.4514 15.2111 12.6504 15.1863C12.8494 15.1615 13.0297 15.0569 13.15 14.8966L16.0078 11.2088V11.1912C16.2525 10.8625 16.1901 10.3989 15.8671 10.1463C15.7108 10.0257 15.5122 9.97346 15.3167 10.0016L15.434 9.99426Z" fill="black"/><path opacity="0.4" d="M19.5 7C20.8807 7 22 5.88071 22 4.5C22 3.11929 20.8807 2 19.5 2C18.1193 2 17 3.11929 17 4.5C17 5.88071 18.1193 7 19.5 7Z" fill="black"/>
						</svg>
					}
					name={'Finance'}
					path={'/finance'}
					dataSet={'/finance'}
				/>
				<SidebarBtn
					icon={
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path opacity="0.4" d="M16.0754 2H19.4614C20.8636 2 21.9999 3.14585 21.9999 4.55996V7.97452C21.9999 9.38864 20.8636 10.5345 19.4614 10.5345H16.0754C14.6731 10.5345 13.5369 9.38864 13.5369 7.97452V4.55996C13.5369 3.14585 14.6731 2 16.0754 2Z" fill="black"/>
							<path d="M7.92449 13.4655C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655H7.92449ZM19.4615 13.4655C20.8637 13.4655 22 14.6114 22 16.0255V19.44C22 20.8532 20.8637 22 19.4615 22H16.0755C14.6732 22 13.537 20.8532 13.537 19.44V16.0255C13.537 14.6114 14.6732 13.4655 16.0755 13.4655H19.4615ZM7.92449 2C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2H7.92449Z" fill="black"/>
						</svg>

					}
					name={'Groups'}
					path={'/groups'}
					dataSet={'/groups'}
				/>
				<SidebarBtn
					icon={
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11.9491 14.5399C8.49909 14.5399 5.58813 15.1037 5.58813 17.2794C5.58813 19.4561 8.51789 20 11.9491 20C15.3991 20 18.31 19.4362 18.31 17.2605C18.31 15.0839 15.3803 14.5399 11.9491 14.5399Z" fill="black"/>
							<path opacity="0.4" d="M11.949 12.467C14.2851 12.467 16.1583 10.5831 16.1583 8.23351C16.1583 5.88306 14.2851 4 11.949 4C9.61293 4 7.73975 5.88306 7.73975 8.23351C7.73975 10.5831 9.61293 12.467 11.949 12.467Z" fill="black"/>
							<path opacity="0.4" d="M21.0881 9.21923C21.6925 6.84176 19.9205 4.70654 17.664 4.70654C17.4187 4.70654 17.1841 4.73356 16.9549 4.77949C16.9244 4.78669 16.8904 4.802 16.8725 4.82902C16.8519 4.86324 16.8671 4.90917 16.8895 4.93889C17.5673 5.89528 17.9568 7.0597 17.9568 8.30967C17.9568 9.50741 17.5996 10.6241 16.9728 11.5508C16.9083 11.6462 16.9656 11.775 17.0793 11.7948C17.2369 11.8227 17.3981 11.8371 17.5629 11.8416C19.2059 11.8849 20.6807 10.8213 21.0881 9.21923Z" fill="black"/>
							<path d="M22.8092 14.817C22.5083 14.1722 21.7821 13.73 20.6781 13.513C20.157 13.3851 18.7467 13.205 17.435 13.2293C17.4153 13.232 17.4045 13.2455 17.4027 13.2545C17.4 13.2671 17.4054 13.2887 17.4314 13.3022C18.0376 13.6039 20.3808 14.916 20.0862 17.6834C20.0737 17.8032 20.1695 17.9068 20.2886 17.8888C20.8652 17.8059 22.3489 17.4853 22.8092 16.4866C23.0635 15.9589 23.0635 15.3456 22.8092 14.817Z" fill="black"/>
							<path opacity="0.4" d="M7.04483 4.77973C6.8165 4.7329 6.58101 4.70679 6.33567 4.70679C4.07926 4.70679 2.30726 6.84201 2.91255 9.21947C3.31906 10.8216 4.79379 11.8851 6.43685 11.8419C6.60161 11.8374 6.76368 11.8221 6.92037 11.7951C7.03409 11.7753 7.09139 11.6465 7.02692 11.551C6.40014 10.6234 6.04288 9.50765 6.04288 8.30991C6.04288 7.05904 6.43327 5.89462 7.11109 4.93913C7.13258 4.90941 7.1487 4.86348 7.12721 4.82926C7.1093 4.80135 7.07617 4.78694 7.04483 4.77973Z" fill="black"/>
							<path d="M3.32156 13.5127C2.21752 13.7297 1.49225 14.1719 1.19139 14.8167C0.936203 15.3453 0.936203 15.9586 1.19139 16.4872C1.65163 17.4851 3.13531 17.8066 3.71195 17.8885C3.83104 17.9065 3.92595 17.8038 3.91342 17.6832C3.61883 14.9167 5.9621 13.6046 6.56918 13.3029C6.59425 13.2885 6.59963 13.2677 6.59694 13.2542C6.59515 13.2452 6.5853 13.2317 6.5656 13.2299C5.25294 13.2047 3.84358 13.3848 3.32156 13.5127Z" fill="black"/>
						</svg>

					}
					name={'Teachers'}
					path={'/teachers'}
					dataSet={'/teachers'}
				/>
				<SidebarBtn
					icon={
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.1528 5.55559C10.2037 5.65925 10.2373 5.77027 10.2524 5.8844L10.5308 10.0243L10.669 12.1051C10.6705 12.3191 10.704 12.5317 10.7687 12.7361C10.9356 13.1326 11.3372 13.3846 11.7741 13.3671L18.4313 12.9316C18.7196 12.9269 18.998 13.0347 19.2052 13.2313C19.3779 13.3952 19.4894 13.6096 19.5246 13.8402L19.5364 13.9802C19.2609 17.795 16.4592 20.9767 12.6524 21.7981C8.84555 22.6194 4.94186 20.8844 3.06071 17.535C2.51839 16.5619 2.17965 15.4923 2.06438 14.389C2.01623 14.0624 1.99503 13.7326 2.00098 13.4026C1.99503 9.31279 4.90747 5.77702 8.98433 4.92463C9.47501 4.84822 9.95603 5.10798 10.1528 5.55559Z" fill="black"/>
							<path opacity="0.4" d="M12.8701 2.00082C17.43 2.11683 21.2624 5.39579 22.0001 9.81229L21.993 9.84488L21.9729 9.89227L21.9757 10.0224C21.9652 10.1947 21.8987 10.3605 21.784 10.4945C21.6646 10.634 21.5014 10.729 21.3217 10.7659L21.2121 10.7809L13.5313 11.2786C13.2758 11.3038 13.0214 11.2214 12.8314 11.052C12.6731 10.9107 12.5719 10.7201 12.5433 10.5147L12.0277 2.84506C12.0188 2.81913 12.0188 2.79102 12.0277 2.76508C12.0348 2.55367 12.1278 2.35384 12.2861 2.21023C12.4444 2.06662 12.6547 1.9912 12.8701 2.00082Z" fill="black"/>
						</svg>

					}
					name={'Statistic'}
					path={'/statistic'}
					dataSet={'/statistic'}
				/>
			</div>
		
			<div className="sidebar-setting">
				<SidebarBtn
					name={'Settings'}
					path={'/settings'}
					dataSet={'/settings'}
					icon={
						<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12.012 15.3302C10.4075 15.3302 9.10962 14.0802 9.10962 12.5102C9.10962 10.9402 10.4075 9.68018 12.012 9.68018C13.6165 9.68018 14.8837 10.9402 14.8837 12.5102C14.8837 14.0802 13.6165 15.3302 12.012 15.3302Z" fill="black"/>
							<path opacity="0.4" d="M21.2301 14.8701C21.036 14.5701 20.76 14.2701 20.4023 14.0801C20.1162 13.9401 19.9322 13.7101 19.7687 13.4401C19.2475 12.5801 19.5541 11.4501 20.4228 10.9401C21.4447 10.3701 21.7718 9.10012 21.179 8.11012L20.4943 6.93012C19.9118 5.94012 18.6344 5.59012 17.6226 6.17012C16.7233 6.65012 15.5685 6.33012 15.0473 5.48012C14.8838 5.20012 14.7918 4.90012 14.8122 4.60012C14.8429 4.21012 14.7203 3.84012 14.5363 3.54012C14.1582 2.92012 13.4735 2.50012 12.7172 2.50012H11.2763C10.5302 2.52012 9.84553 2.92012 9.4674 3.54012C9.27323 3.84012 9.16081 4.21012 9.18125 4.60012C9.20169 4.90012 9.10972 5.20012 8.9462 5.48012C8.425 6.33012 7.27019 6.65012 6.38109 6.17012C5.35913 5.59012 4.09191 5.94012 3.49917 6.93012L2.81446 8.11012C2.23194 9.10012 2.55897 10.3701 3.57071 10.9401C4.43937 11.4501 4.74596 12.5801 4.23498 13.4401C4.06125 13.7101 3.87729 13.9401 3.59115 14.0801C3.24368 14.2701 2.93709 14.5701 2.77358 14.8701C2.39546 15.4901 2.4159 16.2701 2.79402 16.9201L3.49917 18.1201C3.87729 18.7601 4.58245 19.1601 5.31825 19.1601C5.66572 19.1601 6.0745 19.0601 6.40153 18.8601C6.65702 18.6901 6.96361 18.6301 7.30085 18.6301C8.31259 18.6301 9.16081 19.4601 9.18125 20.4501C9.18125 21.6001 10.1215 22.5001 11.3069 22.5001H12.6968C13.872 22.5001 14.8122 21.6001 14.8122 20.4501C14.8429 19.4601 15.6911 18.6301 16.7029 18.6301C17.0299 18.6301 17.3365 18.6901 17.6022 18.8601C17.9292 19.0601 18.3278 19.1601 18.6855 19.1601C19.411 19.1601 20.1162 18.7601 20.4943 18.1201L21.2097 16.9201C21.5776 16.2501 21.6083 15.4901 21.2301 14.8701Z" fill="black"/>
						</svg>
					}
				/>
			</div>
		</div>
	)
}

export default SideBar;