import { useState, useEffect,  } from "react";
import InputMask from "react-input-mask";
import Modal from "../Modal";
import "./unver.scss";
import { PasportFileIcon } from "../../assets/icons";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Select } from 'antd';


const UniversalFormModal = ({title, firstBtnText = "Cancel",secondBtnText = "Save", modalState, setModalState ,    }) => {
  const [phone, setPhone] = useState("+998");
  const [delateSstate, setDelateSstate] = useState(false);

  // userImg or admin img upload code =>

    const [selectedImage, setSelectedImage] = useState(null);
    const [leftImgState, setLeftImgState] = useState(null);

    useEffect(() => {
      if (selectedImage) {
        setLeftImgState(URL.createObjectURL(selectedImage));
      }
    }, [selectedImage]);

  // userImg or admin img upload code <=

  // pasport first img state =>
    const [selectedPasport, setSelectedPasort] = useState(null);
    const [pasortImgState, setPasortImgState] = useState(null);

    useEffect(() => {
      if (selectedPasport) {
        setPasortImgState(URL.createObjectURL(selectedPasport));
      }
    }, [selectedPasport]);


  // pasport first img state <=

  // pasport second img state = >

  const [selectedSecondPasport, setSelectedSecondPasort] = useState(null);
  const [secondPasortImgState, setSecondPasortImgState] = useState(null);

  useEffect(() => {
    if (selectedSecondPasport) {
      setSecondPasortImgState(URL.createObjectURL(selectedSecondPasport));
    }
  }, [selectedSecondPasport]);

  // pasport second img state <=

  //  Form submit fcuntion  =>
  const formArr = [
    {
      
    }
  ]
  const [formData, setFormData] = useState({
    fulName: '',
    position: '',
    email: '',
    firstPhoneNumber : '',
    passportSeries: '',
    firsPasportPhoto: '',
    day: '', 
    month: '',
    year: '',
    gender: '',
    secondPhoneNumber: '',
    addres: '' ,
    password: '',
    workingDays: '',
    secondPasportPhoto: '',
  })

  const handleSubmit = (e)=>{
    e.preventDefault()

    console.log(formData);
    
  }

//  Form submit fcuntion  <=
  

  const { Option } = Select;

  return modalState ? (
    <Modal onClose={() => setModalState(false)}>
      <div className="universal-modal">
        <div className="universal-modal-top">
          <h3 className="">{title}</h3>
          <span className="universal-modal-top__close" onClick={() => setModalState(false)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6.5L6 18.5"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6.5L18 18.5"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <div className="main">
          <form method="" className="universal-modal-form" onSubmit={e => {handleSubmit(e)}}>
            <div className="universal-modal-form-left">
              <div className="universal-modal-form-left-photo">
                <label
                  className="universal-modal-form-left-photo__customer"
                  htmlFor="inputLeftImg"
                >
                  <svg
                    width="68"
                    height="68"
                    viewBox="0 0 68 68"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M65.1667 53.8333C65.1667 55.3362 64.5696 56.7776 63.5069 57.8403C62.4442 58.903 61.0029 59.5 59.5 59.5H8.5C6.9971 59.5 5.55576 58.903 4.49306 57.8403C3.43035 56.7776 2.83333 55.3362 2.83333 53.8333V22.6667C2.83333 21.1638 3.43035 19.7224 4.49306 18.6597C5.55576 17.597 6.9971 17 8.5 17H19.8333L25.5 8.5H42.5L48.1667 17H59.5C61.0029 17 62.4442 17.597 63.5069 18.6597C64.5696 19.7224 65.1667 21.1638 65.1667 22.6667V53.8333Z"
                      stroke="#BFC1DA"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M34 48.1667C40.2592 48.1667 45.3333 43.0926 45.3333 36.8333C45.3333 30.5741 40.2592 25.5 34 25.5C27.7408 25.5 22.6667 30.5741 22.6667 36.8333C22.6667 43.0926 27.7408 48.1667 34 48.1667Z"
                      stroke="#BFC1DA"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <img
                    src={leftImgState}
                    alt=""
                    id="leftImg"
                    className="uploadImg"
                  />
                </label>
                <input
                  className="universal-modal-form-left-photo__input"
                  type="file"
                  name="adminFotot"
                  id="inputLeftImg"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => setSelectedImage(e.target.files[0])}
                />
              </div>
              <div className="universal-modal-form-left-item active">
                <label
                  htmlFor="fulName"
                  className="universal-modal-form-left-item__label"
                >
                  F.I.O
                </label>
                <input
                  type=""
                  name="fulName"
                  id="fulName"
                  className="universal-modal-form-left-item__input"
                  placeholder="Name"
                  required
                />
              </div>
              {/* lavozim  */}
              <div className="universal-modal-form-left-item">
                <label
                  htmlFor=""
                  className="universal-modal-form-left-item__label"
                  
                >
                  Lavozim
                </label>
                <Select
                  defaultValue="Admin"
                  style={{
                    width: 100+ '%',
                  }}
                  className="universal-modal-form-left-item__select"
                  name="lavozimi"
                >
                  <Option value="admin">Admin</Option>
                  <Option value="superAdmin">Super Admin</Option>
                </Select>
              </div>
              {/* lavozim  */}
              <div className="universal-modal-form-left-item">
                <label
                  htmlFor="email"
                  className="universal-modal-form-left-item__label"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="universal-modal-form-left-item__input"
                  placeholder="email"
                  required
                />
              </div>
              <div className="universal-modal-form-left-item">
                <label
                  htmlFor=""
                  className="universal-modal-form-left-item__label"
                >
                  Telefon raqam
                </label>
                <InputMask
                  className="universal-modal-form-left-item__input"
                  onChange={(e) => setPhone(e.target.value)}
                  mask="+999(99) 999 99 99"
                  placeholder="+998 (_ _) _ _ _  _ _  _ _"
                  required
                  name="phoneNumber"
                />
              </div>
             
              <div className="universal-modal-form-left-item">
                <label
                  htmlFor=""
                  className="universal-modal-form-left-item__label"
                >
                  Passport series
                </label>
                <input
                  type="text"
                  name="passportSeries"
                  className="universal-modal-form-left-item__input"
                  placeholder="AB 1254872"
                  required 
                  style={{ textTransform: "uppercase" }}
                />
              </div>

              <div className="universal-modal-form-left-passport-photo">
                <label className="universal-modal-form-left-passport-photo__label">
                  Pasport nusxasi
                </label>
                <label
                  className="universal-modal-form-left-passport-photo__customer"
                  htmlFor="inputRighttImg"
                >
                  <PasportFileIcon />
                  <img
                    src={pasortImgState}
                    alt=""
                    id="rightImg"
                    className="uploadImg"
                  />
                </label>
                <input
                  className="universal-modal-form-left-passport-photo__input"
                  type="file"
                  name="firstPasportImg"
                  id="inputRighttImg"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => setSelectedPasort(e.target.files[0])}
                />
                </div>
            </div>

            <div className="universal-modal-form-right">
            
              <div className="universal-modal-form-right-item">
                <label
                  htmlFor=""
                  className="universal-modal-form-right-item__label"
                >
                  Tug`ilgan kun
                </label>
                <div className="universal-modal-form-right-item-day">
                  <InputMask
                    className="universal-modal-form-right-item-day__input day"
                    mask="99"
                    placeholder="14"
                    name="day"
                  />
                  <Select
                    defaultValue="January"
                    name="month"
                    style={{
                      width: 130,
                    }}
                    className="universal-modal-form-right-item__select"
                  >
                    <Option value="junuary">January</Option>
                    <Option value="february">February</Option>
                    <Option value="march">March</Option>
                    <Option value="april">April</Option>
                    <Option value="may">May</Option>
                    <Option value="june">June</Option>
                    <Option value="july">July</Option>
                    <Option value="august">August</Option>
                    <Option value="september">September</Option>
                    <Option value="october">October</Option>
                    <Option value="november">November</Option>
                    <Option value="december">December</Option>
                  </Select>

                  <InputMask
                    className="universal-modal-form-right-item-day__input year"
                    mask="9999"
                    placeholder="1998"
                    name="year"
                  />
                </div>
              </div>

              <div className="universal-modal-form-right-item">
                <label
                  htmlFor=""
                  className="universal-modal-form-right-item__label"
                >
                  Jins
                </label>
                <div className="wrapper">
									<div className="universal-modal-form-right-item-radio">
										<input className="universal-modal-form-right-item-radio__input" type="radio" name="jinsi" id="erkak"  value={'erkak'}/>
										<label className="universal-modal-form-right-item-radio__label" htmlFor="erkak">Man</label>
									</div>
									<div className="universal-modal-form-right-item-radio">
										<input className="universal-modal-form-right-item-radio__input" type="radio" name="jinsi" id="ayol" value={'ayol'} />
										<label className="universal-modal-form-right-item-radio__label" htmlFor="ayol">Woman</label>
									</div>
								</div>
              </div>
              <div className="universal-modal-form-right-item">
                <label
                  htmlFor=""
                  className="universal-modal-form-right-item__label"
                >
                  Qo`shimcha telefon raqam
                </label>
                <InputMask
                  className="universal-modal-form-right-item__input"
                  onChange={(e) => setPhone(e.target.value)}
                  mask="+999(99) 999 99 99"
                  placeholder="+998 (_ _) _ _ _  _ _  _ _"
                  required
                  name="secondPhoneNumber"
                />
              </div>

              <div className="universal-modal-form-right-item">
                <label
                  htmlFor=""
                  className="universal-modal-form-right-item__label"
                >
                  Manzil
                </label>
                <input
                  type="text"
                  name="address"
                  className="universal-modal-form-right-item__input"
                  placeholder="Manzil"
                  required
                />
              </div>
              <div className="universal-modal-form-right-item">
                <label
                  htmlFor=""
                  className="universal-modal-form-right-item__label"
                >
                  Password
                </label>
                <Input.Password
                  placeholder="********"
                  type="password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                  className="universal-modal-form-right-item__input passInput"
                  name="password"
                  required
                />
                
              </div>

              <div className="universal-modal-form-right-item choseDay">
                <label className="universal-modal-form-right-item__label">
                  Ish kunlari
                </label>
                <div className="universal-modal-form-right-item-week">
                  <div className="universal-modal-form-right-item-week-container">
                    <input
                      type="checkbox"
                      className="universal-modal-form-right-item-week-container__input"
                      name="mu"
                      id="week-check1"
                    />
                    <label
                      htmlFor="week-check1"
                      className="universal-modal-form-right-item-week-container__label"
                      id="week-check"
                    >
                      Mu
                    </label>
                  </div>
                  <div className="universal-modal-form-right-item-week-container">
                    <input
                      type="checkbox"
                      className="universal-modal-form-right-item-week-container__input"
                      name="tu"
                      id="week-check2"
                    />
                    <label
                      htmlFor="week-check2"
                      className="universal-modal-form-right-item-week-container__label"
                      id="week-check2"
                    >
                      Tu
                    </label>
                  </div>
                  <div className="universal-modal-form-right-item-week-container">
                    <input
                      type="checkbox"
                      className="universal-modal-form-right-item-week-container__input"
                      name=""
                      id="week-check3"
                    />
                    <label
                      htmlFor="week-check3"
                      className="universal-modal-form-right-item-week-container__label"
                    >
                      We
                    </label>
                  </div>
                  <div className="universal-modal-form-right-item-week-container">
                    <input
                      type="checkbox"
                      className="universal-modal-form-right-item-week-container__input"
                      name=""
                      id="week-check4"
                    />
                    <label
                      htmlFor="week-check4"
                      className="universal-modal-form-right-item-week-container__label"
                    >
                      Th
                    </label>
                  </div>
                  <div className="universal-modal-form-right-item-week-container">
                    <input
                      type="checkbox"
                      className="universal-modal-form-right-item-week-container__input"
                      name=""
                      id="week-check5"
                    />
                    <label
                      htmlFor="week-check5"
                      className="universal-modal-form-right-item-week-container__label"
                    >
                      Tu
                    </label>
                  </div>
                  <div className="universal-modal-form-right-item-week-container">
                    <input
                      type="checkbox"
                      className="universal-modal-form-right-item-week-container__input"
                      name=""
                      id="week-check6"
                    />
                    <label
                      htmlFor="week-check6"
                      className="universal-modal-form-right-item-week-container__label"
                    >
                      Sa
                    </label>
                  </div>
                  <div className="universal-modal-form-right-item-week-container">
                    <input
                      type="checkbox"
                      className="universal-modal-form-right-item-week-container__input"
                      name=""
                      id="week-check7"
                    />
                    <label
                      htmlFor="week-check7"
                      className="universal-modal-form-right-item-week-container__label"
                    >
                      Su
                    </label>
                  </div>
                </div>
              </div>
              <div className="universal-modal-form-right-photo">
                <label className="universal-modal-form-right-photo__label">
                  Pasport yashash manzil nusxasi 
                </label>
                <label
                  className="universal-modal-form-right-photo__customer"
                  htmlFor="inputLefPssporttImg"
                >
                  <PasportFileIcon />
                  <img
                    src={secondPasortImgState}
                    alt=""
                    id="rightImg"
                    className="uploadImg"
                  />
                </label>
                <input
                  className="universal-modal-form-right-photo__input"
                  type="file"
                  name="pasoportImg"
                  id="inputLefPssporttImg"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => setSelectedSecondPasort(e.target.files[0])}
                />
                </div>

              <div className="universal-modal-form-right-bottom">
                <span className="universal-modal-form-right-bottom__btn cancel">
                  {firstBtnText}
                </span>
                <button className="universal-modal-form-right-bottom__btn save" type="sumbit">
                  {secondBtnText}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  ) : null;
};

export default UniversalFormModal;



/*

unversal modal 

	header {
		title
	}

	left va right {

		left{ 

			img  => className = {class { clasActive }} =

			classActive = display => block
			class = display => none

			
		}
	}

*/
