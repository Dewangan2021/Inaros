//  {
//     key: "Address",
//     txtLabel: "Address",
//     txtPlaceholder: "Enter address",
//     txtMaxlength: 30,
//     txtRequired: true,
//     txtReadonly: false,
//     handleChange: handleInputChange,
//     val: inputVal,
//     err: inputError,
//   }
import styles from "./Textfield.module.css";

import { useState , useEffect} from "react";
import { validationlist } from "../addFields/SelectValidation";

const Textfield = ({ textData }) => {
  const [editMode, setEditMode] = useState(false);
  const [req, setReq] = useState(textData.txtRequired);

  const [label, setLabel] = useState(textData.txtLabel);
  const [placeholder, setPlacehoder] = useState(textData.txtPlaceholder);
  const [maxLen, setMaxLen] = useState(textData.txtMaxlength);
  const [validation, setValidation] = useState("");

    useEffect(() => {
      if (textData.validationList[textData.key]) {
        setValidation(textData.validationList[textData.key].name);
        // console.log(inpData.validationList[inpData.key].name);
      }
    }, [textData.validationList]);
  return (
    <div className={styles.txt_cont}>
      <div className={styles.edit_cont}>
        {!editMode && (
          <p className={styles.cus_label}>
            {textData.txtLabel}
            {textData.txtRequired && (
              <span className={styles.cus_required}>*</span>
            )}
          </p>
        )}
        {/* input for editing label */}
        {editMode && (
          <div className={styles.inp_cont}>
            <input
              value={label}
              className={styles.inp}
              onInput={(e) => {
                setLabel(e.target.value);
              }}
            ></input>
          </div>
        )}
        {/* edit icon */}
        {!editMode && !textData.submitStatus &&(
          <svg
            onClick={() => {
              setEditMode(true);
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="blue"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${styles.edit_icon} lucide lucide-pen-icon lucide-pen`}
          >
            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
          </svg>
        )}

        {/* confirm icon */}
        {editMode && !textData.submitStatus &&(
          <svg
            onClick={() => {
              setEditMode(false);
              textData.updateTextFields(
                textData.key,
                label,
                placeholder,
                maxLen,
                validation,
                req
              );
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="green"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={` ${styles.edit_icon} lucide lucide-circle-check-big-icon lucide-circle-check-big`}
          >
            <path d="M21.801 10A10 10 0 1 1 17 3.335" />
            <path d="m9 11 3 3L22 4" />
          </svg>
        )}
      </div>
      {!editMode && (
        <>
          <textarea
            rows={5}
            className={styles.cus_txt_area}
            value={textData.val[textData.key]}
            placeholder={textData.txtPlaceholder}
            maxLength={textData.txtMaxlength}
            required={textData.txtRequired}
            readOnly={textData.txtReadonly}
            wrap="hard"
            onInput={(e) => {
              textData.handleChange(
                textData.key,
                e.target.value,
                textData.txtRequired
              );
            }}
          ></textarea>
          {textData.err[textData.key] && (
            <p className={styles.error}>{textData.err[textData.key]}</p>
          )}
        </>
      )}
      {editMode && (
        <>
          <div className={styles.inp_cont}>
            <p className={styles.label}>Placeholder</p>
            <input
              value={placeholder}
              className={styles.inp}
              onInput={(e) => {
                setPlacehoder(e.target.value);
              }}
            ></input>
          </div>
          <div className={styles.inp_cont}>
            <p className={styles.label}>Maximum length</p>
            <input
              value={maxLen}
              className={styles.inp}
              onInput={(e) => {
                setMaxLen(e.target.value);
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
        </>

      )}
    </div>
  );
};
export default Textfield;
