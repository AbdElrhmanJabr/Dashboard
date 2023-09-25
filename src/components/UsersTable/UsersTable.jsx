import React from "react";
import "./UsersTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { usersColumns, usersRows } from "../../assets/data";
import { Link } from "react-router-dom";

const DataTable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to={"/users/test"}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={usersRows}
        columns={usersColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[5, 9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
