import styles from "./Modal.module.css";

const Modal = ({
  modalData

}) => {
  return (
    <div className={styles.cus_modal_main}>
      <div className={styles.cus_modal}>
        <div className={styles.cus_modal_head}>
          <p className={styles.cus_modal_head_txt}>{modalData.modalHead}</p>
          <svg
            onClick={
              modalData.handleCloseModal
            }
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-x-icon lucide-circle-x"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m15 9-6 6" />
            <path d="m9 9 6 6" />
          </svg>
        </div>
        <div className={styles.cus_modal_cont}>
          <p className={styles.cus_modal_cont_txt}>{modalData.modalCont}</p>
        </div>
        <div className={styles.cus_modal_act}>
          <button
            type="button"
            className={styles.cus_modal_true}
            onClick={modalData.handleOk}
          >
            OK
          </button>
          <button
            type="button"
            className={styles.cus_modal_false}
            onClick={modalData.handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
