// {
//     key: "fruits",
//     selectLabel: "Fruit",
//     option: [
//       { val: "APPLE", label: "Apple" },
//       { val: "PINEAPPLE", label: "Pineapple" },
//       { val: "KIWI", label: "Kiwi" },
//     ],
//     selectDisabled: false,
//     selectRequired: true,
//     val : inputVal,
//     handleChange : handleRadioSelectChange
//   }
import styles from "./Select.module.css";
import { useState, useEffect } from "react";

const Select = ({ selectData }) => {
  const [editMode, setEditMode] = useState(false);
  const [optionValue, setOptionValue] = useState("");
  const [optionLabel, setOptionLabel] = useState([]);
  const [req, setReq] = useState(selectData.selectRequired);

  const [label, setLabel] = useState(selectData.selectLabel);

  const handleFilterLabel = (item) => {
    let labels = optionLabel.filter((label) => label != item);
    setOptionLabel(labels);
  };

  useEffect(() => {
    selectData.option.map((item, index) => {
      if (index != 0) {
        setOptionLabel((prev) => [...prev, item.label]);
      }
    });
  }, [selectData.option]);
  return (
    <div className={styles.sel_cont}>
      <div className={styles.edit_cont}>
        {!editMode && (
          <p className={styles.cus_label}>
            {selectData.selectLabel}
            {selectData.selectRequired && (
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
        {!editMode && !selectData.submitStatus &&(
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
        {editMode && !selectData.submitStatus &&(
          <svg
            onClick={() => {
              setEditMode(false);
              selectData.updateSelectFields(
                selectData.key,
                label,
                optionLabel,
                req
              );
              setOptionValue("");
              setOptionLabel([]);
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
        <select
          className={styles.cus_select}
          value={selectData.val[selectData.key]}
          disabled={selectData.selectDisabled}
          required={selectData.selectRequired}
          onChange={(e) => {
            selectData.handleChange(selectData.key, e.target.value);
            console.log(e.target.value);
          }}
        >
          {selectData.option.map((item) => (
            <option key={item.val} value={item.val}>
              {item.label}
            </option>
          ))}
        </select>
      )}
      {editMode && (
        <>
          <div className={styles.inp_cont}>
            {optionLabel.length != 0 &&
              optionLabel.map((item, index) => (
                <div key={index} className={styles.preview_cont}>
                  <p className={styles.preview_label}>
                    {`${index + 1}`} {item}
                  </p>
                  <svg
                    onClick={() => {
                      handleFilterLabel(item);
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`${styles.delete_opt} lucide lucide-trash2-icon lucide-trash-2`}
                  >
                    <path d="M10 11v6" />
                    <path d="M14 11v6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                    <path d="M3 6h18" />
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                </div>
              ))}
            <div className={styles.option_cont}>
              <input
                value={optionValue}
                className={styles.inp}
                onInput={(e) => {
                  setOptionValue(e.target.value);
                }}
              ></input>
              <svg
                onClick={() => {
                  setOptionLabel((prev) => [...prev, optionValue]);
                  setOptionValue("");
                }}
                style={{
                  marginLeft: "5px",
                  float: "right",
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
                className="lucide lucide-circle-check-icon lucide-circle-check"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
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
        </>
      )}
    </div>
  );
};

export default Select;
