import React, { useState } from "react";
import Popup from "reactjs-popup";
import "./popup.css";
//
type Prop = {
  score: number;
};
const PopupScore = ({ score }: Prop) => {
  const [open, setOpen] = useState(true);
  const closeModal = () => setOpen(false);
  const message = () => {
    if (score < 0)
      return (
        <p className="font-Mali text-xl text-center">สู้ ๆ นะ พยายามเข้า</p>
      );
    else if (score < 50)
      return <p className="font-Mali text-xl text-center"> พยายามอีกนิดนะ </p>;
    else
      return (
        <p className="font-Mali text-xl text-center"> เก่งมาก ยอดเยี่ยม </p>
      );
  };
  return (
    <div>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal ">
          <a className="close" onClick={closeModal}>
            &times;
          </a>
          <div className="header"> ผลลัพธ์ของคุณ </div>
          {message()}
          <p className="font-Mali text-xl text-center">คุณได้ {score} คะแนน</p>
        </div>
      </Popup>
    </div>
  );
};
export default PopupScore;
