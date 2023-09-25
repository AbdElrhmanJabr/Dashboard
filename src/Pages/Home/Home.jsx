import React from "react";
import "./Home.scss";
import Widget from "../../components/widget/Widget";
import { widgetType } from "../../assets/data";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
const Home = () => {
  return (
    <div className="Home">
      {/* <Sidebar /> */}
      <div className="container">
        {/* <Navbar /> */}
        <div className="content">
          <div className="widgets">
            {widgetType.map((item, i) => {
              return <Widget key={i} data={item} />;
            })}
          </div>
          <div className="charts">
            <Featured />
            <Chart aspect={2 / 1} title={"Last 6 Months (Revenue)"} />
          </div>
          <div className="list_container">
            <div className="list_title">Latest Transactions</div>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
