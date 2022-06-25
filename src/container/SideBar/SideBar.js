
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
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path opacity="0.4" d="M14.6756 0H5.33333C1.92889 0 0 1.92889 0 5.33333V14.6667C0 18.0711 1.92889 20 5.33333 20H14.6756C18.08 20 20 18.0711 20 14.6667V5.33333C20 1.92889 18.08 0 14.6756 0Z" fill="black"/>
							<path d="M5.36866 7.36899C4.91533 7.36899 4.54199 7.74232 4.54199 8.20454V15.0757C4.54199 15.529 4.91533 15.9023 5.36866 15.9023C5.83088 15.9023 6.20421 15.529 6.20421 15.0757V8.20454C6.20421 7.74232 5.83088 7.36899 5.36866 7.36899Z" fill="black"/>
							<path d="M10.0354 4.08899C9.58207 4.08899 9.20874 4.46232 9.20874 4.92454V15.0757C9.20874 15.529 9.58207 15.9023 10.0354 15.9023C10.4976 15.9023 10.871 15.529 10.871 15.0757V4.92454C10.871 4.46232 10.4976 4.08899 10.0354 4.08899Z" fill="black"/>
							<path d="M14.64 10.9956C14.1778 10.9956 13.8044 11.369 13.8044 11.8312V15.0756C13.8044 15.529 14.1778 15.9023 14.6311 15.9023C15.0933 15.9023 15.4667 15.529 15.4667 15.0756V11.8312C15.4667 11.369 15.0933 10.9956 14.64 10.9956Z" fill="black"/>
						</svg>
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
					name={'Adminlar'}
					path={'/adminlar'}
					dataSet={'/adminlar'}
				/>
				<SidebarBtn
					icon={
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15.3131 4C15.2659 4.243 15.2423 4.49001 15.2428 4.73756C15.2428 6.95855 17.0459 8.75902 19.2702 8.75902C19.5151 8.75782 19.7594 8.73431 20 8.68878V16.6615C20 20.0156 18.0215 22 14.6624 22H7.34636C3.97851 22 2 20.0156 2 16.6615V9.3561C2 6.00195 3.97851 4 7.34636 4H15.3131ZM15.434 9.99426L15.3167 10.0016C15.1211 10.0297 14.9453 10.1358 14.8295 10.2956L12.4201 13.3951L9.6766 11.2351C9.51997 11.1131 9.32071 11.0592 9.12381 11.0856C8.92691 11.1121 8.74898 11.2166 8.63019 11.3756L5.67562 15.1863C5.57177 15.3158 5.51586 15.4771 5.51734 15.6429L5.51994 15.7533C5.54858 16.0433 5.74748 16.2939 6.03238 16.3838C6.35288 16.485 6.70138 16.3573 6.88031 16.0732L9.35125 12.8771L12.0948 15.0283C12.2508 15.1541 12.4514 15.2111 12.6504 15.1863C12.8494 15.1615 13.0297 15.0569 13.15 14.8966L16.0078 11.2088V11.1912C16.2525 10.8625 16.1901 10.3989 15.8671 10.1463C15.7108 10.0257 15.5122 9.97346 15.3167 10.0016L15.434 9.99426Z" fill="black"/><path opacity="0.4" d="M19.5 7C20.8807 7 22 5.88071 22 4.5C22 3.11929 20.8807 2 19.5 2C18.1193 2 17 3.11929 17 4.5C17 5.88071 18.1193 7 19.5 7Z" fill="black"/>
						</svg>
					}
					name={'Moliya'}
					path={'/moliya'}
					dataSet={'/moliya'}
				/>
				<SidebarBtn
					icon={
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path opacity="0.4" d="M16.0754 2H19.4614C20.8636 2 21.9999 3.14585 21.9999 4.55996V7.97452C21.9999 9.38864 20.8636 10.5345 19.4614 10.5345H16.0754C14.6731 10.5345 13.5369 9.38864 13.5369 7.97452V4.55996C13.5369 3.14585 14.6731 2 16.0754 2Z" fill="black"/>
							<path d="M7.92449 13.4655C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655H7.92449ZM19.4615 13.4655C20.8637 13.4655 22 14.6114 22 16.0255V19.44C22 20.8532 20.8637 22 19.4615 22H16.0755C14.6732 22 13.537 20.8532 13.537 19.44V16.0255C13.537 14.6114 14.6732 13.4655 16.0755 13.4655H19.4615ZM7.92449 2C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2H7.92449Z" fill="black"/>
						</svg>

					}
					name={'Guruhlar'}
					path={'/guruhlar'}
					dataSet={'/guruhlar'}
				/>
				<SidebarBtn
					icon={
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11.949 14.5399C8.49903 14.5399 5.58807 15.1037 5.58807 17.2794C5.58807 19.4561 8.51783 20 11.949 20C15.399 20 18.31 19.4363 18.31 17.2605C18.31 15.0839 15.3802 14.5399 11.949 14.5399Z" fill="black"/>
							<path opacity="0.4" d="M11.949 12.467C14.2851 12.467 16.1583 10.5831 16.1583 8.23351C16.1583 5.88306 14.2851 4 11.949 4C9.61293 4 7.73975 5.88306 7.73975 8.23351C7.73975 10.5831 9.61293 12.467 11.949 12.467Z" fill="black"/>
							<path opacity="0.4" d="M21.0879 9.21926C21.6923 6.84179 19.9203 4.70657 17.6639 4.70657C17.4186 4.70657 17.184 4.73359 16.9548 4.77952C16.9243 4.78672 16.8903 4.80203 16.8724 4.82905C16.8518 4.86327 16.867 4.9092 16.8894 4.93892C17.5672 5.89531 17.9567 7.05973 17.9567 8.3097C17.9567 9.50744 17.5995 10.6241 16.9727 11.5508C16.9082 11.6463 16.9655 11.775 17.0792 11.7949C17.2368 11.8228 17.398 11.8372 17.5627 11.8417C19.2058 11.8849 20.6805 10.8213 21.0879 9.21926Z" fill="black"/>
							<path d="M22.8093 14.8169C22.5084 14.1721 21.7823 13.73 20.6782 13.5129C20.1571 13.3851 18.7468 13.2049 17.4351 13.2293C17.4154 13.232 17.4046 13.2455 17.4028 13.2545C17.4002 13.2671 17.4055 13.2887 17.4315 13.3022C18.0377 13.6039 20.381 14.916 20.0864 17.6834C20.0738 17.8032 20.1696 17.9068 20.2887 17.8887C20.8654 17.8059 22.349 17.4853 22.8093 16.4866C23.0636 15.9588 23.0636 15.3456 22.8093 14.8169Z" fill="black"/>
							<path opacity="0.4" d="M7.04483 4.77979C6.8165 4.73296 6.58101 4.70685 6.33567 4.70685C4.07926 4.70685 2.30726 6.84207 2.91255 9.21953C3.31906 10.8216 4.79379 11.8852 6.43685 11.842C6.60161 11.8375 6.76368 11.8221 6.92037 11.7951C7.03409 11.7753 7.09139 11.6465 7.02692 11.5511C6.40014 10.6235 6.04288 9.50771 6.04288 8.30997C6.04288 7.0591 6.43327 5.89468 7.11109 4.93919C7.13258 4.90947 7.1487 4.86354 7.12721 4.82932C7.1093 4.80141 7.07617 4.787 7.04483 4.77979Z" fill="black"/>
							<path d="M3.32156 13.5127C2.21752 13.7297 1.49225 14.1719 1.19139 14.8167C0.936203 15.3453 0.936203 15.9586 1.19139 16.4872C1.65163 17.485 3.13531 17.8065 3.71195 17.8885C3.83104 17.9065 3.92595 17.8038 3.91342 17.6831C3.61883 14.9166 5.9621 13.6045 6.56918 13.3028C6.59425 13.2884 6.59963 13.2677 6.59694 13.2542C6.59515 13.2452 6.5853 13.2317 6.5656 13.2299C5.25294 13.2047 3.84358 13.3848 3.32156 13.5127Z" fill="black"/>
						</svg>
					}
					name={'O`quvchilar'}
					path={'/oquvchilar'}
					dataSet={'/oquvchilar'}
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
					name={'O`qituvchilar'}
					path={'/oqituvchilar'}
					dataSet={'/oqituvchilar'}
				/>
				<SidebarBtn
					icon={
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path opacity="0.4" d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2Z" fill="black"/>
							<path d="M8.08002 15.74H15.92C16.319 15.78 16.62 16.12 16.62 16.53C16.62 16.929 16.319 17.27 15.92 17.31H8.08002C7.78002 17.35 7.49002 17.2 7.33002 16.95C7.17002 16.69 7.17002 16.36 7.33002 16.11C7.49002 15.85 7.78002 15.71 8.08002 15.74ZM15.92 11.179C16.35 11.179 16.7 11.53 16.7 11.96C16.7 12.39 16.35 12.74 15.92 12.74H8.08002C7.64902 12.74 7.30002 12.39 7.30002 11.96C7.30002 11.53 7.64902 11.179 8.08002 11.179H15.92ZM11.069 6.65C11.5 6.65 11.85 7 11.85 7.429C11.85 7.87 11.5 8.22 11.069 8.22H8.08002C7.64902 8.22 7.30002 7.87 7.30002 7.44C7.30002 7.01 7.64902 6.66 8.08002 6.66V6.65H11.069Z" fill="black"/>
						</svg>
					}
					name={'Lead'}
					path={'/lead'}
					dataSet={'/lead'}
				/>
				<SidebarBtn
					icon={
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.1528 5.55559C10.2037 5.65925 10.2373 5.77027 10.2524 5.8844L10.5308 10.0243L10.669 12.1051C10.6705 12.3191 10.704 12.5317 10.7687 12.7361C10.9356 13.1326 11.3372 13.3846 11.7741 13.3671L18.4313 12.9316C18.7196 12.9269 18.998 13.0347 19.2052 13.2313C19.3779 13.3952 19.4894 13.6096 19.5246 13.8402L19.5364 13.9802C19.2609 17.795 16.4592 20.9767 12.6524 21.7981C8.84555 22.6194 4.94186 20.8844 3.06071 17.535C2.51839 16.5619 2.17965 15.4923 2.06438 14.389C2.01623 14.0624 1.99503 13.7326 2.00098 13.4026C1.99503 9.31279 4.90747 5.77702 8.98433 4.92463C9.47501 4.84822 9.95603 5.10798 10.1528 5.55559Z" fill="black"/>
							<path opacity="0.4" d="M12.8701 2.00082C17.43 2.11683 21.2624 5.39579 22.0001 9.81229L21.993 9.84488L21.9729 9.89227L21.9757 10.0224C21.9652 10.1947 21.8987 10.3605 21.784 10.4945C21.6646 10.634 21.5014 10.729 21.3217 10.7659L21.2121 10.7809L13.5313 11.2786C13.2758 11.3038 13.0214 11.2214 12.8314 11.052C12.6731 10.9107 12.5719 10.7201 12.5433 10.5147L12.0277 2.84506C12.0188 2.81913 12.0188 2.79102 12.0277 2.76508C12.0348 2.55367 12.1278 2.35384 12.2861 2.21023C12.4444 2.06662 12.6547 1.9912 12.8701 2.00082Z" fill="black"/>
						</svg>

					}
					name={'Statistika'}
					path={'/statistika'}
					dataSet={'/statistika'}
				/>
				<SidebarBtn
					icon={
						
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12.012 14.8301C10.4075 14.8301 9.10962 13.5801 9.10962 12.0101C9.10962 10.4401 10.4075 9.1801 12.012 9.1801C13.6165 9.1801 14.8837 10.4401 14.8837 12.0101C14.8837 13.5801 13.6165 14.8301 12.012 14.8301Z" fill="black"/>
							<path opacity="0.4" d="M21.23 14.3701C21.0358 14.0701 20.7599 13.7701 20.4022 13.5801C20.1161 13.4401 19.9321 13.2101 19.7686 12.9401C19.2474 12.0801 19.554 10.9501 20.4227 10.4401C21.4446 9.87011 21.7716 8.60011 21.1789 7.61011L20.4942 6.43011C19.9117 5.44011 18.6342 5.09011 17.6225 5.67011C16.7232 6.15011 15.5684 5.83011 15.0472 4.98011C14.8837 4.70011 14.7917 4.40011 14.8121 4.10011C14.8428 3.71011 14.7201 3.34011 14.5362 3.04011C14.1581 2.42011 13.4734 2.00011 12.7171 2.00011H11.2761C10.5301 2.02011 9.8454 2.42011 9.46728 3.04011C9.27311 3.34011 9.16069 3.71011 9.18113 4.10011C9.20157 4.40011 9.10959 4.70011 8.94608 4.98011C8.42488 5.83011 7.27007 6.15011 6.38097 5.67011C5.35901 5.09011 4.09178 5.44011 3.49905 6.43011L2.81434 7.61011C2.23182 8.60011 2.55885 9.87011 3.57059 10.4401C4.43925 10.9501 4.74584 12.0801 4.23486 12.9401C4.06112 13.2101 3.87717 13.4401 3.59102 13.5801C3.24356 13.7701 2.93697 14.0701 2.77346 14.3701C2.39533 14.9901 2.41577 15.7701 2.7939 16.4201L3.49905 17.6201C3.87717 18.2601 4.58232 18.6601 5.31813 18.6601C5.6656 18.6601 6.07438 18.5601 6.40141 18.3601C6.6569 18.1901 6.96348 18.1301 7.30073 18.1301C8.31247 18.1301 9.16069 18.9601 9.18113 19.9501C9.18113 21.1001 10.1213 22.0001 11.3068 22.0001H12.6967C13.8719 22.0001 14.8121 21.1001 14.8121 19.9501C14.8428 18.9601 15.691 18.1301 16.7027 18.1301C17.0298 18.1301 17.3364 18.1901 17.6021 18.3601C17.9291 18.5601 18.3277 18.6601 18.6853 18.6601C19.4109 18.6601 20.1161 18.2601 20.4942 17.6201L21.2096 16.4201C21.5775 15.7501 21.6081 14.9901 21.23 14.3701Z" fill="black"/>
						</svg>
					}
					name={'Sozlamalar'}
					path={'/sozlamalar'}
					dataSet={'/sozlamalar'}
				/>
			</div>

				
		
			
		</div>
	)
}

export default SideBar;