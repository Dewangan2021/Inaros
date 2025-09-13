// {
//     key: "file",
//     label: "Select files",
//     type: "file",
//     multiple: true,
//     accept: ".jpg",
//     disabled: false,
//     req: true,
//     handleChange: handleCheckChange,
//   }

import { useState } from "react";
import Button from "../components/Button";
import IconButton from "../components/IconButton";

import { CheckCircleIcon } from "lucide-react";

import styles from "./AddRadio.module.css";

const AddFileInput = ({ addFileData }) => {
  const [showModal, setShowModal] = useState(false);
  const [label, setLabel] = useState("");
  const [fileType, setFileType] = useState([]);
  const [req, setReq] = useState(false);

  const handleFieldReq = () => {
    setShowModal(false);
    let objValues = Object.keys(addFileData.inputVal);
    let len = objValues.length;
    let fieldKey = `field${len}`;

    let acc = fileType.toString();

    handleAddField(fieldKey, label, "file", false, acc, false, req);
    setLabel("");
    setFileType([]);
    setReq(false);
  };

  const iconbuttonData = {
    icon: CheckCircleIcon,
    type: "button",
    disabled: false,
    iconBtnFunc: handleFieldReq,
  };
  // btn and logic to add select field dynamically
  const btnAddFileField = {
    btnType: "button",
    btnDisabled: false,
    btnText: "Add FileInput",
    btnFunc: () => {
      setShowModal(true);
    },
  };
  const handleAddField = (
    newKey,
    newLabel,
    newType,
    newMultiple,
    newAccept,
    newDisabled,
    newReq
  ) => {
    addFileData.setFields((prev) => [
      ...prev,
      {
        fieldType: "file",
        key: newKey,
        label: newLabel,
        type: newType,
        multiple: newMultiple,
        accept: newAccept,
        disabled: newDisabled,
        req: newReq,
      },
    ]);

    addFileData.addInpKey(newKey);
  };
  return (
    <>
      <Button btnData={btnAddFileField}></Button>
      {showModal && (
        <div className={styles.modal_cont}>
          <div className={styles.add_content}>
            <div className={styles.head_cont}>
              <p className={styles.head}>File</p>
              <svg
                onClick={() => {
                  setShowModal(false);
                  setLabel("");
                  setFileType([]);
                  setReq(false);
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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

            <div className={styles.inp_cont}>
              <p className={styles.label}>Enter Label</p>
              <input
                value={label}
                className={styles.inp}
                onInput={(e) => {
                  setLabel(e.target.value);
                }}
              ></input>
            </div>

            <div className={styles.inp_cont}>
              <p className={styles.label}>Accept</p>
              <div className={styles.preview_cont}>
                <input
                  type="checkbox"
                  value={".jpg"}
                  onChange={(e) => {
                    let value = e.target.value;
                    console.log(e.target.checked);
                    if (e.target.checked) {
                      setFileType((prev) => [...prev, value]);
                    } else {
                      let newFileType = fileType.filter(
                        (item) => item != value
                      );
                      console.log(newFileType);
                      setFileType(newFileType);
                    }
                  }}
                />

                <p className={styles.preview_label}>jpg</p>
              </div>

              <div className={styles.preview_cont}>
                <input
                  type="checkbox"
                  value={".pdf"}
                  onChange={(e) => {
                    let value = e.target.value;
                    console.log(e.target.checked);
                    if (e.target.checked) {
                      setFileType((prev) => [...prev, value]);
                    } else {
                      let newFileType = fileType.filter(
                        (item) => item != value
                      );
                      console.log(newFileType);
                      setFileType(newFileType);
                    }
                  }}
                />
                <p className={styles.preview_label}>png</p>
              </div>
            </div>

            <div className={styles.req_cont}>
              <p className={styles.label}>Required</p>
              <input
                style={{
                  marginLeft: "15px",
                }}
                type="checkbox"
                checked={req}
                onChange={(e) => {
                  // console.log(e.target.checked);
                  setReq(e.target.checked);
                }}
              ></input>
            </div>
            <div className={styles.btn_cont}>
              <IconButton iconBtnData={iconbuttonData}></IconButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddFileInput;
