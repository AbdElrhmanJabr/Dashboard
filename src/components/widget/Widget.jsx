import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Widget = ({ data: { title, isMoney, link, icon } }) => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{title}</span>
        <span className="counter">12349 {isMoney && "$"}</span>
        <span className="all_users">{link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          20%
        </div>
        {icon}
      </div>
    </div>
  );
};

export default Widget;
