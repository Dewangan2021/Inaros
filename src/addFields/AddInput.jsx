// import a button to open a form where the user can enter the details
// on click submit:
// the state that maintains a list of input will update
// the zustand state to maintain input value and input error should be updated with the key
// the validations should also be updated

import Button from "../components/Button";
import IconButton from "../components/IconButton";
import { CheckCircleIcon } from "lucide-react";

import SelectValidation from "./SelectValidation";
import { validationlist } from "./SelectValidation";

import { useState } from "react";

import styles from "./AddInput.module.css";

const AddInput = ({ addInputData }) => {
  const [label, setLabel] = useState("");
  const [placeholder, setPlacehoder] = useState("");
  const [maxLen, setMaxLen] = useState("");
  const [max, setMax] = useState("");
  const [min, setMin] = useState("");
  const [type, setType] = useState("text");

  const [validation, setValidation] = useState("");

  const [req, setReq] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleFieldReq = () => {
    setShowModal(false);
    let objValues = Object.keys(addInputData.inputVal);
    let len = objValues.length;
    let fieldKey = `field${len}`;

    handleAddField(
      fieldKey,
      type,
      label,
      placeholder,
      maxLen,
      req,
      false,
      min,
      max,
      validation
    );
    setLabel("");
    setPlacehoder("");
    setMaxLen("");
    setMin("");
    setMax("");
    setType("text");
    setReq(false);
    setValidation("");
  };

  const iconbuttonData = {
    icon: CheckCircleIcon,
    type: "button",
    disabled: false,
    iconBtnFunc: handleFieldReq,
  };
  // btn and logic to add input field dynamically
  const btnAddField = {
    btnType: "button",
    btnDisabled: false,
    btnText: "Add Input",
    btnFunc: () => {
      setShowModal(true);
    },
  };
  const handleAddField = (
    newKey,
    newType,
    newLabel,
    newPlaceholder,
    newMaxlength,
    newReq,
    newReadonly,
    newMin,
    newMax,
    newValidation
  ) => {
    addInputData.setFields((prev) => [
      ...prev,
      {
        fieldType: "input",
        key: newKey,
        type: newType,
        inpLabel: newLabel,
        inpPlaceholder: newPlaceholder,
        inpMaxlength: newMaxlength,
        inpRequired: newReq,
        inpReadonly: newReadonly,
        inpMin: newMin,
        inpMax: newMax,
      },
    ]);

    addInputData.addInpKey(newKey);
    addInputData.addErrorKey(newKey);

    let selectedValidation = SelectValidation(newValidation);
    // console.log(selectedValidation);

    if (selectedValidation != null) {
      addInputData.validationList((prev) => ({
        ...prev,
        [newKey]: selectedValidation,
      }));
    }
  };

  return (
    <>
      <Button btnData={btnAddField}></Button>
      {showModal && (
        <div className={styles.modal_cont}>
          <div className={styles.add_content}>
            <div className={styles.head_cont}>
              <p className={styles.head}>Input</p>
              <svg
                onClick={() => {
                  setShowModal(false);
                  setLabel("");
                  setPlacehoder("");
                  setMaxLen("");
                  setMax("");
                  setMin("");
                  setType("text");
                  setValidation("");
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
              <p className={styles.label}>Type</p>
              <select
                className={styles.sel_type}
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                }}
              >
                <option value={"text"}>Text</option>
                <option value={"email"}>Email</option>
                <option value={"password"}>Password</option>
                <option value={"date"}>Date</option>
                <option value={"week"}>Week</option>
                <option value={"month"}>Month</option>
                <option value={"datetime-local"}>Datetime</option>
                <option value={"number"}>Number</option>
                <option value={"time"}>Time</option>
                {/* <option value={"url"}>URL</option> */}
              </select>
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
            {type != "text" && type != "email" && type != "password" && (
              <>
                <div className={styles.inp_cont}>
                  <p className={styles.label}>Minimum Value</p>
                  <input
                    type={type}
                    value={min}
                    className={styles.inp}
                    onInput={(e) => {
                      // console.log(typeof e.target.value);
                      setMin(e.target.value);
                      // setLabel(e.target.value);
                    }}
                  ></input>
                </div>

                <div className={styles.inp_cont}>
                  <p className={styles.label}>Maximum Value</p>
                  <input
                    type={type}
                    value={max}
                    className={styles.inp}
                    onInput={(e) => {
                      // console.log(typeof e.target.value);
                      setMax(e.target.value);
                      // setLabel(e.target.value);
                    }}
                  ></input>
                </div>
              </>
            )}
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

export default AddInput;
