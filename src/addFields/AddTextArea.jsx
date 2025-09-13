//    {
//       key: "address",
//       txtLabel: "Address",
//       txtPlaceholder: "Enter address",
//       txtMaxlength: 500,
//       txtRequired: true,
//       txtReadonly: false,

//     },

import { useState } from "react";
import Button from "../components/Button";
import IconButton from "../components/IconButton";

import { CheckCircleIcon } from "lucide-react";

import SelectValidation from "./SelectValidation";
import { validationlist } from "./SelectValidation";

import styles from "./AddInput.module.css";

const AddTextArea = ({ addTextAreaData }) => {
  const [label, setLabel] = useState("");
  const [placeholder, setPlacehoder] = useState("");
  const [req, setReq] = useState(false);
  const [maxLen, setMaxLen] = useState("");
  const [validation, setValidation] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleFieldReq = () => {
    setShowModal(false);
    let objValues = Object.keys(addTextAreaData.inputVal);
    let len = objValues.length;
    let fieldKey = `field${len}`;

    handleAddField(
      fieldKey,
      label,
      placeholder,
      maxLen,
      req,
      false,
      validation
    );
    setLabel("");
    setPlacehoder("");
    setMaxLen("");
    setReq(false);
    setValidation("");
  };

  const iconbuttonData = {
    icon: CheckCircleIcon,
    type: "button",
    disabled: false,
    iconBtnFunc: handleFieldReq,
  };

  // btn and logic to add textarea field dynamically
  const btnAddTxtField = {
    btnType: "button",
    btnDisabled: false,
    btnText: "Add TextArea",
    btnFunc: () => {
      setShowModal(true);
    },
  };

  const handleAddField = (
    newKey,
    newLabel,
    newPlaceholder,
    newMaxlength,
    newReq,
    newReadonly,
    newValidation
  ) => {
    addTextAreaData.setFields((prev) => [
      ...prev,
      {
        fieldType: "textarea",
        key: newKey,
        txtLabel: newLabel,
        txtPlaceholder: newPlaceholder,
        txtMaxlength: newMaxlength,
        txtRequired: newReq,
        txtReadonly: newReadonly,
      },
    ]);

    addTextAreaData.addInpKey(newKey);
    addTextAreaData.addErrorKey(newKey);

    let selectedValidation = SelectValidation(newValidation);

    if (selectedValidation != null) {
      addTextAreaData.validationList((prev) => ({
        ...prev,
        [newKey]: selectedValidation,
      }));
    }
  };

  return (
    <>
      <Button btnData={btnAddTxtField}></Button>
      {showModal && (
        <div className={styles.modal_cont}>
          <div className={styles.add_content}>
            <div className={styles.head_cont}>
              <p className={styles.head}>TextArea</p>
              <svg
                onClick={() => {
                  setShowModal(false);
                  setLabel("");
                  setPlacehoder("");
                  setReq(false);
                  setMaxLen("");
                  setValidation("");
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
              <p className={styles.label}>Enter Placeholder</p>
              <input
                value={placeholder}
                className={styles.inp}
                onInput={(e) => {
                  setPlacehoder(e.target.value);
                }}
              ></input>
            </div>

            <div className={styles.inp_cont}>
              <p className={styles.label}>Maximum Length</p>
              <input
                type="text"
                value={maxLen}
                className={styles.inp}
                onInput={(e) => {
                  // console.log(typeof e.target.value);
                  setMaxLen(e.target.value);
                  // setLabel(e.target.value);
                }}
              ></input>
            </div>

            <div className={styles.inp_cont}>
              <p className={styles.label}>Select Validation</p>
              <select
                className={styles.sel_type}
                value={validation}
                onChange={(e) => {
                  setValidation(e.target.value);
                }}
              >
                <option value={""}>No validation</option>
                {validationlist.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
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

export default AddTextArea;
