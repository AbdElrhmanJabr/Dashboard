import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import List from "../Pages/List/List";
import Login from "../Pages/Login/Login";
import Single from "../Pages/Single/Single";
import New from "../Pages/New/New";
import { userInputs, productInputs } from "../assets/data";

const Router = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="List" element={<List />} />
        <Route path="Login" element={<Login />} />
        <Route path="users">
          <Route index element={<List title={"Users"} />} />
          <Route path=":userId" element={<Single />} />
          <Route
            path="new"
            element={<New userInputs={userInputs} title={"Add New User"} />}
          />
        </Route>
        <Route path="products">
          <Route index element={<List title={"Products"} />} />
          <Route path=":productId" element={<Single />} />
          <Route
            path="new"
            element={
              <New userInputs={productInputs} title={"Add New Product"} />
            }
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
