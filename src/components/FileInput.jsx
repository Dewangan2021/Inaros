import { useState, useRef, useEffect } from "react";
import styles from "./FileInput.module.css";
const FileInput = ({ fileData }) => {
<<<<<<< HEAD
  const [editMode, setEditMode] = useState(false);
  const [showUpload, setShowUpload] = useState(true);
  const [label, setLabel] = useState(fileData.label);
  const [fileType, setFileType] = useState([]);
  const [req, setReq] = useState(fileData.req);
=======
  const [showUpload, setShowUpload] = useState(true);
>>>>>>> e5599fc (Code 13.09.25)
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    fileData.handleChange(fileData.key, selectedFile);
  }, [selectedFile]);

  useEffect(() => {
    let fileTypeList = fileData.accept.split(",");
    setFileType(fileTypeList);
  }, [fileData.accept]);

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
=======
 fileData.handleChange(fileData.key, selectedFile);
  }, [selectedFile]);

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); 
>>>>>>> e5599fc (Code 13.09.25)
    }
  };
  return (
    <div className={styles.fileinp_cont}>
<<<<<<< HEAD
      <div className={styles.edit_cont}>
        {!editMode && (
          <p className={styles.fileinp_cus_label}>
            {fileData.label}
            {fileData.req && <span className={styles.cus_required}>*</span>}
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
        {!editMode && !fileData.submitStatus &&(
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
        {editMode && !fileData.submitStatus &&(
          <svg
            onClick={() => {
              setEditMode(false);
              fileData.updateFileFields(fileData.key, fileType, req, label);

              setFileType([]);
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
        <div className={styles.det_cont}>
          <input
            ref={fileInputRef}
            className={styles.inp_style}
            type={fileData.type}
            multiple={fileData.multiple}
            accept={fileData.accept}
            disabled={fileData.disabled}
            required={fileData.req}
            onChange={(e) => {
              console.log(e.target.files);
              const filesArray = Array.from(e.target.files);
              // console.log(filesArray);
              setSelectedFile(filesArray);
              setShowUpload(false);
            }}
          ></input>
          {!showUpload && (
            <div className={styles.file_name_cont}>
              {selectedFile.map((item, index) => (
                <div key={index} className={styles.name_cont}>
                  <p className={styles.file_name}>{item.name}</p>
                </div>
              ))}
            </div>
          )}
          {showUpload && (
            <div
              className={`${styles.svg_cont}  lucide lucide-upload-icon lucide-upload`}
            >
              <svg
                onClick={() => {
                  handleIconClick();
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke={fileData.disabled ? "gray" : "black"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3v12" />
                <path d="m17 8-5-5-5 5" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              </svg>
            </div>
          )}
        </div>
      )}

      {editMode && (
        <>
          {/* <div className={styles.inp_cont}> */}
          <p className={styles.label}>Accept</p>
          <div className={styles.preview_cont}>
            <input
              type="checkbox"
              value={".jpg"}
              checked={fileType.includes(".jpg") ? true : false}
              onChange={(e) => {
                let value = e.target.value;
                // console.log(e.target.checked);
                if (e.target.checked) {
                  setFileType((prev) => [...prev, value]);
                } else {
                  let newFileType = fileType.filter((item) => item != value);
                  // console.log(newFileType);
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
              checked={fileType.includes(".pdf") ? true : false}
              onChange={(e) => {
                let value = e.target.value;
                // console.log(e.target.checked);
                if (e.target.checked) {
                  setFileType((prev) => [...prev, value]);
                } else {
                  let newFileType = fileType.filter((item) => item != value);
                  // console.log(newFileType);
                  setFileType(newFileType);
                }
              }}
            />
            <p className={styles.preview_label}>png</p>
          </div>
          {/* </div> */}

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
=======
      <p className={styles.fileinp_cus_label}>{fileData.label}{fileData.req && (
                <span className={styles.cus_required}>*</span>
              )}</p>
      <div className={styles.det_cont}>
        
        <input
       
          ref={fileInputRef}
          className={styles.inp_style}
          type={fileData.type}
          multiple={fileData.multiple}
          accept={fileData.accept}
          disabled={fileData.disabled}
          required={fileData.req}
          onChange={(e) => {
            console.log(e.target.files);
            const filesArray = Array.from(e.target.files);
            // console.log(filesArray);
            setSelectedFile(filesArray);
            setShowUpload(false);
          }}
        ></input>
        {!showUpload && (
          <div className={styles.file_name_cont}>
            {selectedFile.map((item, index) => (
              <div key={index} className={styles.name_cont}>
                <p className={styles.file_name}>{item.name}</p>
              </div>
            ))}
          </div>
        )}
        {showUpload && (
          <div
            className={`${styles.svg_cont}  lucide lucide-upload-icon lucide-upload`}
          >
            <svg
              onClick={() => {
                handleIconClick();
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3v12" />
              <path d="m17 8-5-5-5 5" />
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            </svg>
          </div>
        )}
      </div>
>>>>>>> e5599fc (Code 13.09.25)
    </div>
  );
};

export default FileInput;
