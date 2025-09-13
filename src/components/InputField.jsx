//  {
//       key: "lastName",
//       type: "text",
//       inpLabel: "Last Name",
//       inpPlaceholder: "Enter LastName",
//       inpMaxlength: 10,
//       inpRequired: true,
//       inpReadonly: true,
//       handleChange: handleInputChange,
//       val: inputVal,
//       err: inputError,
//     }

import { useEffect, useState } from "react";
import styles from "./InputField.module.css";
import { validationlist } from "../addFields/SelectValidation";

const InputField = ({ inpData }) => {
  const [inpType, setInptype] = useState(inpData.type);
  const [editMode, setEditMode] = useState(false);
  const [req, setReq] = useState(inpData.inpRequired);

  const [label, setLabel] = useState(inpData.inpLabel);
  const [placeholder, setPlacehoder] = useState(inpData.inpPlaceholder);
  const [maxLen, setMaxLen] = useState(inpData.inpMaxlength);
  const [max, setMax] = useState(inpData.inpMax);
  const [min, setMin] = useState(inpData.inpMin);

  const [validation, setValidation] = useState("");

  useEffect(() => {
    if (inpData.validationList[inpData.key]) {
      setValidation(inpData.validationList[inpData.key].name);
      // console.log(inpData.validationList[inpData.key].name);
    }
  }, [inpData.validationList]);

  return (
    <div className={styles.inp_main_cont}>
      <div className={styles.edit_cont}>
        {!editMode && (
          <p className={styles.cus_label}>
            {inpData.inpLabel}
            {inpData.inpRequired && (
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
        {!editMode && !inpData.submitStatus && (
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
        {editMode &&  !inpData.submitStatus && (
          <svg
            onClick={() => {
              setEditMode(false);
              inpData.updateInputFields(
                inpData.key,
                label,
                placeholder,
                maxLen,
                validation,
                req,
                min,
                max
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
          <div className={styles.cus_pass}>
            <input
              type={inpType}
              className={styles.cus_inp}
              value={inpData.val[inpData.key]}
              placeholder={inpData.inpPlaceholder}
              maxLength={inpData.inpMaxlength}
              required={inpData.inpRequired}
              readOnly={inpData.inpReadonly}
              min={inpData.inpMin}
              max={inpData.inpMax}
              onInput={(e) => {
                inpData.handleChange(
                  inpData.key,
                  e.target.value,
                  inpData.inpRequired
                );
              }}
            ></input>
            {inpData.type == "password" && (
              <>
                {inpType == "password" && (
                  <svg
                    onClick={() => {
                      setInptype("text");
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
                    className={`${styles.pass_toggle} lucide lucide-eye-icon lucide-eye`}
                  >
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}

                {inpType == "text" && (
                  <svg
                    onClick={() => {
                      setInptype(inpData.type);
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
                    className={`${styles.pass_toggle} lucide lucide-eye-off-icon lucide-eye-off`}
                  >
                    <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                    <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                    <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                    <path d="m2 2 20 20" />
                  </svg>
                )}
              </>
            )}
          </div>

          {inpData.err[inpData.key] && (
            <p className={styles.error}>{inpData.err[inpData.key]}</p>
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

          {inpData.type != "text" &&
            inpData.type != "email" &&
            inpData.type != "password" && (
              <>
                <div className={styles.inp_cont}>
                  <p className={styles.label}>Max value</p>
                  <input
                    type={inpData.type}
                    value={max}
                    className={styles.inp}
                    onInput={(e) => {
                      setMax(e.target.value);
                    }}
                  ></input>
                </div>
                <div className={styles.inp_cont}>
                  <p className={styles.label}>Min value</p>
                  <input
                    type={inpData.type}
                    value={min}
                    className={styles.inp}
                    onInput={(e) => {
                      setMin(e.target.value);
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
        </>
      )}
    </div>
  );
};
export default InputField;
