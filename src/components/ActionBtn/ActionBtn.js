import "./ActionBtn.scss";

const ActionBtn = ({
  icon,
  btnText,
  styleClassName,
  onClick,
  secondOnClick,
}) => {
  return (
    <button className={`action-btn-item ${styleClassName}`} onClick={onClick}>
      <span className="empty" onClick={secondOnClick}></span>
      <span className="action-btn-item__icon">{icon}</span>
      <span className="action-btn-item__text">{btnText}</span>
    </button>
  );
};

export default ActionBtn;
