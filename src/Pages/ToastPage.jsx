import { useState } from "react";
import Button from "../components/Button";
import Toast from "../components/Toast";

const ToastPage = () => {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("");
  const [msg, setMsg] = useState("");

  const handleShowToast = () => {
    setType("success");
    setMsg("Account update succesful");
    setShow(true);
  };

  const myToastData = {
    toastShow: show,
    setToastShow: setShow,
    toastType: type,
    toastMsg: msg,
    setToastMsg: setMsg,
    setToastType: setType,
  };

  const btnData = {
    btnText: "Show toast",
    btnType: "button",
    btnDisabled: false,
    btnFunc: handleShowToast,
  };

  return (
    <div
      style={{
        padding: "10px",
      }}
    >
      <Button btnData={btnData}></Button>

      {show && msg != "" && type != "" && (
        <Toast toastData={myToastData}></Toast>
      )}
    </div>
  );
};

export default ToastPage;
