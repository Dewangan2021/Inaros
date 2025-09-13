//  {key: "hobby",
//       checkLabel: "Hobbies",
//       checkRequired: true,
//  checkDisabled:false,
//       option: [
//         {val: "READING", label: "Reading",},
// {val: "DANCING",label: "Dancing", },
//         {val: "SINGING",label: "Singing",},
//           {val: "CYCLING",label: "Cycing" },
//       ],}

import { CheckCircleIcon } from "lucide-react";
import { useState } from "react";
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import styles from "./AddRadio.module.css";

const AddCheckBox = ({ addCheckData }) => {
  const [label, setLabel] = useState("");
  const [optionValue, setOptionValue] = useState("");
  const [optionLabel, setOptionLabel] = useState([]);
  const [req, setReq] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleFieldReq = () => {
    setShowModal(false);
    let objValues = Object.keys(addCheckData.inputVal);
    let len = objValues.length;
    let fieldKey = `field${len}`;
    // console.log(fieldKey);

    let option = [];
    option = optionLabel.map((item) => {
      let upperCaseVal = item.toUpperCase();
      // console.log(upperCaseVal);
      return { val: upperCaseVal, label: item };
    });
    // console.log(option);

    handleAddField(fieldKey, label, req, false, option);

    setLabel("");

    setOptionLabel([]);
    setOptionValue("");

    setReq(false);
  };

  const iconbuttonData = {
    icon: CheckCircleIcon,
    type: "button",
    disabled: false,
    iconBtnFunc: handleFieldReq,
  };

  // btn and logic to add select field dynamically
  const btnAddCheckField = {
    btnType: "button",
    btnDisabled: false,
    btnText: "Add CheckBox",
    btnFunc: () => {
      setShowModal(true);
      // handleAddField("language", "Languages Known", true, false, [
      //   { val: "HINDI", label: "Hindi" },
      //   { val: "ENGLISH", label: "English" },
      //   { val: "FRENCH", label: "French" },
      //   { val: "SPANISH", label: "Spanish" },
      // ]);
    },
  };
  const handleAddField = (newKey, newLabel, newReq, newDisabled, newOption) => {
    addCheckData.setFields((prev) => [
      ...prev,
      {

        fieldType: "checkbox",

        key: newKey,
        checkLabel: newLabel,
        checkRequired: newReq,
        checkDisabled: newDisabled,
        option: newOption,
      },
    ]);

    addCheckData.addInpKey(newKey);
  };
  const handleFilterLabel = (item) => {
    let labels = optionLabel.filter((label) => label != item);
    setOptionLabel(labels);
  };
  return (
    <>
      <Button btnData={btnAddCheckField}></Button>
      {showModal && (
        <div className={styles.modal_cont}>
          <div className={styles.add_content}>
            <div className={styles.head_cont}>
              <p className={styles.head}>Checkbox</p>
              <svg
                onClick={() => {
                  setShowModal(false);

                  setLabel("");
                  setOptionLabel([]);
                  setOptionValue("");
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
              <p className={styles.label}>Add option</p>
              {optionLabel.length != 0 &&
                optionLabel.map((item, index) => (
                  <div key={index} className={styles.preview_cont}>
                    <input type="checkbox" disabled={true}></input>
                    <p className={styles.preview_label}>{item}</p>
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
            <div className={styles.btn_cont}>
              <IconButton iconBtnData={iconbuttonData}></IconButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddCheckBox;
