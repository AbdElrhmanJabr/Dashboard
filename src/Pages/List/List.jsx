import React from "react";
import "./List.scss";
import DataTable from "../../components/UsersTable/UsersTable";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const List = ({ title }) => {
  const location = useLocation();
  return (
    <div className="list">
      <div className="content">
        <div className="list_container">
          <div className="list_title">
            {title}
            <Link to={"new"}>
              <motion.button whileTap={{ scale: 1.2 }}>
                {location.pathname === "/users"
                  ? "Add New User"
                  : "Add New Product"}
              </motion.button>
            </Link>
          </div>
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default List;
