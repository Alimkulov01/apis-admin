import { useState } from "react";
import { Link } from "react-router-dom";
import "./Adlist.scss";
import Modal from "../../components/Modal";
import ActionMenuWrapper from '../../container/ActionMenuWrapper'
import {GreenEditICon , TrashIcon} from '../../assets/icons/index';
import UserImg from '../../assets/images/unsplash_mEZ3PoFGs_k.svg'
const AdminListItem = ({
  AdminImg,
  name,
  surname,
  phoneNumber = 938791222,
  WorkingTime,
  LastUsedTime,
  Userid = 0,
}) => {


  

  const [delateSstate, setDelateSstate] = useState(false);
  const [modalState, setModalState] = useState(false);

  const openMoal = (e) => {
    e.preventDefault();
    setDelateSstate(!delateSstate);
    setModalState(true);
  };

  const actionArr= [
    {
      icon: <GreenEditICon/>,
      text : 'Edit',
      styleClassName: 'green',
    },
    {
      icon: <TrashIcon/>,
      text : 'Delete',
      styleClassName: 'red',
      onClick: openMoal
    },
]

  return (
    <>
      {modalState ? (
        <Modal onClose={() => setModalState(false)}>
          <div className="modal-content">
            <h3>Are you sure you want to delete profil?</h3>
            <div className="buttons-wrapper">
              <button className="modal-button" onClick={() => setModalState(false)}>No, Cancel</button>
              <button className="modal-button alert" onClick={() => setModalState(false)}>Yes,delete</button>
            </div>
          </div>
        </Modal>
      ) : null}
      <div className="admin-list" id={Userid + 1}>
        <div className="admin-list-left">
          <div className="admin-list-left__index">{Userid + 1}</div>
          <div className="admin-list-left-img">
            <img className="admin-list-left-img__item" src={UserImg} alt="" />
          </div>
          <Link to={`/adminlar/${Userid+1}`} className="admin-list-left-name">
            {/* <span className="admin-list-left-name__text">{surname}</span> */}
            <span className="admin-list-left-name__text">{name}</span>
          </Link>
        </div>
        <div className="admin-list-number">
          <span className="admin-list-number__text">+998 {phoneNumber}</span>
        </div>
        <div className="admin-list-workDay">
          <span className="admin-list-workDay__text">{WorkingTime}</span>
        </div>
        <div className="admin-list-lastWorkingTime">
          <span className="admin-list-lastWorkingTime__text">
            {LastUsedTime}
          </span>
        </div>

        <div className="admin-list-action">
          <ActionMenuWrapper
            actionArr={actionArr}
          />
        </div>
      </div>
    </>
  );
};


export default AdminListItem;


