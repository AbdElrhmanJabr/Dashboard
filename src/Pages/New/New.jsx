import React, { useState } from "react";
import "./New.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { motion } from "framer-motion";

const New = ({ userInputs, title }) => {
  const [img, setImg] = useState(null);
  console.log(img);
  return (
    <div className="New">
      <div className="content">
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                img
                  ? URL.createObjectURL(img)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="/"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput icon">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={(e) => setImg(e.target.files[0])}
                />
              </div>
              {userInputs.map((input) => {
                return (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                );
              })}
              <motion.button whileTap={{ scale: 1.1 }}>Send</motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
