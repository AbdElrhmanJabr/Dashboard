import "./Featured.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { featured } from "../../assets/data";
import { Fragment } from "react";
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <span>Top Revenue</span> <MoreVertOutlinedIcon />
      </div>
      <div className="bottom">
        <div className="percentage">
          <CircularProgressbar value={75} text="70%" strokeWidth={3} />
        </div>
        <div className="total_sales">
          <h4>Total Sales Made Today</h4>
          <span>{featured.totalSales}</span>
          <p>
            Previous transactions processing. Last payments may not be included.
          </p>
        </div>
        <div className="statics">
          {featured.statics.map((item, i) => {
            return (
              <Fragment key={i}>
                <div className="static">
                  <span>{item.target?.title}</span>
                  {item.target?.positive === true ? (
                    <span style={{ color: "#009688" }}>
                      {item.target?.icon}
                      {item.target?.num}
                    </span>
                  ) : (
                    <span style={{ color: "crimson" }}>
                      {item.target?.icon}
                      {item.target?.num}
                    </span>
                  )}
                </div>
                <div className="static">
                  <span>{item.lastWeek?.title}</span>
                  {item.lastWeek?.positive === true ? (
                    <span style={{ color: "#009688" }}>
                      {item.lastWeek?.icon}
                      {item.lastWeek?.num}
                    </span>
                  ) : (
                    <span style={{ color: "crimson" }}>
                      {item.lastWeek?.icon}
                      {item.lastWeek?.num}
                    </span>
                  )}
                </div>
                <div className="static">
                  <span>{item.LastMonth?.title}</span>
                  {item.LastMonth?.positive === true ? (
                    <span style={{ color: "#009688" }}>
                      {item.LastMonth?.icon}
                      {item.LastMonth?.num}
                    </span>
                  ) : (
                    <span style={{ color: "crimson" }}>
                      {item.LastMonth?.icon}
                      {item.LastMonth?.num}
                    </span>
                  )}
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Featured;
