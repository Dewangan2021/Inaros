import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";
const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOK = () => {
    console.log("Ok clicked");
  };
  const handleCancel = () => {
    console.log("Cancel clicked");
  };

  const modalData = {
    modalHead: "Modal Title",
    modalCont:
      "Lorem ipsum dolo orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem ipsum dolo orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    handleCloseModal: handleCloseModal,

    handleOk: () => {
      handleOK();
    },
    handleCancel: () => {
      handleCancel();
    },
  };

  const btnData = {
    btnType: "button",
    btnDisabled: false,
    btnText: "Show Modal",
    btnFunc: handleShowModal,
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        <Button
          btnData={btnData}
          // btnText={"Show Modal"}
          // btnType={"button"}
          // btnDisabled={false}
          // btnFunc={handleShowModal}
        ></Button>
      </div>

      {showModal && <Modal modalData={modalData}></Modal>}
    </>
  );
};

export default ModalPage;
