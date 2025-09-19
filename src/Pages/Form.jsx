// Input fields import

import InputField from "../components/InputField";
import Textfield from "../components/Textfield";
import Radio from "../components/Radio";
import Select from "../components/Select";
import FileInput from "../components/FileInput";
import CheckInput from "../components/CheckInput";

// Add fields import
import AddCheckBox from "../addFields/AddCheckBox";
import AddFileInput from "../addFields/AddFileInput";
import AddInput from "../addFields/AddInput";
import AddRadio from "../addFields/AddRadio";
import AddSelect from "../addFields/AddSelect";
import AddTextArea from "../addFields/AddTextArea";

import ButtonFormSubmit from "../components/ButtonFormSubmit";
import Button from "../components/Button";
import { useState, useEffect } from "react";

// Validation import
import SelectValidation from "../addFields/SelectValidation";

// state values import
import useFormValuesTest from "../store/formValuesTest";

const FormPage = () => {
  // values from state
  const inputVal = useFormValuesTest((state) => state.inpValues);
  const inputError = useFormValuesTest((state) => state.inpError);
  const setInpValues = useFormValuesTest((state) => state.setInpValues);
  const setErrValues = useFormValuesTest((state) => state.setErrValues);
  const addInpKey = useFormValuesTest((state) => state.addInpKey);
  const addErrorKey = useFormValuesTest((state) => state.addErrorKey);
  const addInpKeyCheck = useFormValuesTest((state) => state.addInpKeyCheck);
  const submitStatus = useFormValuesTest((state) => state.submitStatus);
  const setSubmitStatus = useFormValuesTest((state) => state.setSubmitStatus);
  // validation
  const [validation, setValidation] = useState({});

  const validateFields = (key, value) => {
    let error = "";

    if (validation[key]) {
      error = validation[key](key, value);
    }

    return error;
  };

  // function for editing fields
  const updateRadioFields = (key, label, optionLabel, required) => {
    let option = [];
    option = optionLabel.map((item) => {
      let upperCaseVal = item.toUpperCase();
      return { val: upperCaseVal, label: item };
    });

    let updatedField = [];

    updatedField = fields.map((item) => {
      if (item.key == key) {
        return {
          ...item,
          radioLabel: label,
          radioOption: option,
          radioReq: required,
        };
      } else {
        return item;
      }
    });
    setFields(updatedField);
  };

  const updateCheckFields = (key, label, optionLabel, required) => {
    let option = [];
    option = optionLabel.map((item) => {
      let upperCaseVal = item.toUpperCase();
      return { val: upperCaseVal, label: item };
    });

    let updatedField = [];

    updatedField = fields.map((item) => {
      if (item.key == key) {
        return {
          ...item,
          checkLabel: label,
          option: option,
          checkRequired: required,
        };
      } else {
        return item;
      }
    });
    setFields(updatedField);
  };

  const updateSelectFields = (key, label, optionLabel, required) => {
    let option = [];
    option = optionLabel.map((item) => {
      let upperCaseVal = item.toUpperCase();
      return { val: upperCaseVal, label: item };
    });
    option.unshift({ val: "", label: "Select from dropdown" });

    let updatedField = [];

    updatedField = fields.map((item) => {
      if (item.key == key) {
        return {
          ...item,
          selectLabel: label,
          option: option,
          selectRequired: required,
        };
      } else {
        return item;
      }
    });
    setFields(updatedField);
  };

  const updateInputFields = (
    key,
    label,
    placeholder,
    maxLen,
    validation,
    required,
    min,
    max
  ) => {
    let updatedField = [];

    updatedField = fields.map((item) => {
      if (item.key == key) {
        return {
          ...item,
          inpLabel: label,
          inpPlaceholder: placeholder,
          inpMaxlength: maxLen,
          inpRequired: required,
          inpMin: min,
          inpMax: max,
        };
      } else {
        return item;
      }
    });
    setFields(updatedField);

    let selectedValidation = SelectValidation(validation);
    // console.log(selectedValidation);

    if (selectedValidation != null) {
      setValidation((prev) => ({
        ...prev,
        [key]: selectedValidation,
      }));
    } else {
      setValidation((prevData) => {
        const { [key]: _, ...rest } = prevData;
        return rest;
      });
    }
  };

  const updateTextFields = (
    key,
    label,
    placeholder,
    maxLen,
    validation,
    required
  ) => {
    let updatedField = [];

    updatedField = fields.map((item) => {
      if (item.key == key) {
        return {
          ...item,
          txtLabel: label,
          txtPlaceholder: placeholder,
          txtMaxlength: maxLen,
          txtRequired: required,
        };
      } else {
        return item;
      }
    });
    setFields(updatedField);

    let selectedValidation = SelectValidation(validation);
    // console.log(selectedValidation);

    if (selectedValidation != null) {
      setValidation((prev) => ({
        ...prev,
        [key]: selectedValidation,
      }));
    } else {
      setValidation((prevData) => {
        const { [key]: _, ...rest } = prevData;
        return rest;
      });
    }
  };

  const updateFileFields = (key, fileType, required, label) => {
    let acceptFileTypes = fileType.toString();
    let updatedField = [];

    updatedField = fields.map((item) => {
      if (item.key == key) {
        return {
          ...item,
          label: label,
          accept: acceptFileTypes,
          req: required,
        };
      } else {
        return item;
      }
    });
    setFields(updatedField);
  };

  // handle field input change
  const handleInputChange = (key, value, req) => {
    let errorMsg = "";
    setInpValues(key, value);

    if (req && !value) {
      setErrValues(key, "This field is required");
    } else {
      errorMsg = validateFields(key, value);
      setErrValues(key, errorMsg);
    }
  };
  const handleRadioSelectChange = (key, value) => {
    setInpValues(key, value);
  };
  const handleCheckFileChange = (key, values) => {
    setInpValues(key, values);
  };

  // field list
  const [fields, setFields] = useState([
    {
      fieldType: "input",
      key: "name",
      type: "input",
      inpLabel: "Name",
      inpPlaceholder: "Enter name",
      inpMaxlength: "20",
      inpRequired: true,
      inpReadonly: false,
      inpMin: "",
      inpMax: "",
    },
  ]);
  // form submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(fields);

    console.log(inputVal);
    console.log(inputError);
  };

  const btnData = {
    btnType: "submit",
    btnDisabled: false,
    btnText: "Submit",
  };

  const formSubmitData = {
    btnType: "submit",
    btnDisabled: false,
    btnText: "Submit Form",
    btnFunc: () => {
      setSubmitStatus();
    },
  };

  // props for add input fields button
  const addInputData = {
    setFields: setFields,
    validationList: setValidation,
    addInpKey: addInpKey,
    addErrorKey: addErrorKey,
    inputVal: inputVal,
  };
  const addTextAreaData = {
    setFields: setFields,
    validationList: setValidation,
    addInpKey: addInpKey,
    addErrorKey: addErrorKey,
    inputVal: inputVal,
  };

  const addRadioData = {
    setFields: setFields,
    addInpKey: addInpKey,
    inputVal: inputVal,
  };
  const addSelectData = {
    setFields: setFields,
    addInpKey: addInpKey,
    inputVal: inputVal,
  };
  const addCheckData = {
    setFields: setFields,
    addInpKey: addInpKeyCheck,
    inputVal: inputVal,
  };

  const addFileData = {
    setFields: setFields,
    addInpKey: addInpKeyCheck,
    inputVal: inputVal,
  };
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          flexDirection: "column",
          marginTop: "40px",
          // justifyContent: "center",
        }}
      >
        <form
          onSubmit={handleFormSubmit}
          style={{
            marginBottom: "20px",
          }}
        >
          {fields.map((item) => {
            if (item.fieldType == "input") {
              return (
                <InputField
                  key={item.key}
                  inpData={{
                    ...item,
                    val: inputVal,
                    err: inputError,
                    handleChange: handleInputChange,
                    updateInputFields: updateInputFields,
                    validationList: validation,
                    submitStatus: submitStatus,
                  }}
                ></InputField>
              );
            } else if (item.fieldType == "textarea") {
              return (
                <Textfield
                  key={item.key}
                  textData={{
                    ...item,
                    handleChange: handleInputChange,
                    updateTextFields: updateTextFields,
                    val: inputVal,
                    err: inputError,
                    validationList: validation,
                    submitStatus: submitStatus,
                  }}
                ></Textfield>
              );
            } else if (item.fieldType == "radio") {
              return (
                <Radio
                  key={item.key}
                  radioData={{
                    ...item,
                    handleChange: handleRadioSelectChange,
                    updateRadioFields: updateRadioFields,
                    val: inputVal,
                    submitStatus: submitStatus,
                  }}
                ></Radio>
              );
            } else if (item.fieldType == "select") {
              return (
                <Select
                  key={item.key}
                  selectData={{
                    ...item,
                    val: inputVal,
                    handleChange: handleRadioSelectChange,
                    updateSelectFields: updateSelectFields,
                    submitStatus: submitStatus,
                  }}
                ></Select>
              );
            } else if (item.fieldType == "checkbox") {
              return (
                <CheckInput
                  key={item.key}
                  checkData={{
                    ...item,
                    err: inputError,
                    handleChange: handleCheckFileChange,
                    updateCheckFields: updateCheckFields,
                    submitStatus: submitStatus,
                  }}
                ></CheckInput>
              );
            } else if (item.fieldType == "file") {
              return (
                <FileInput
                  key={item.key}
                  fileData={{
                    ...item,
                    handleChange: handleCheckFileChange,
                    updateFileFields: updateFileFields,
                    submitStatus: submitStatus,
                  }}
                ></FileInput>
              );
            }
          })}
          {fields.length > 0 && (
            <ButtonFormSubmit btnData={btnData}></ButtonFormSubmit>
          )}
        </form>
        {fields.length > 0 && <Button btnData={formSubmitData}></Button>}
      </div>
      <div
        style={{
          width: "200px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",

          marginTop: "40px",
        }}
      >
        <AddInput addInputData={addInputData}></AddInput>
        <AddTextArea addTextAreaData={addTextAreaData}></AddTextArea>
        <AddRadio addRadioData={addRadioData}></AddRadio>
        <AddSelect addSelectData={addSelectData}></AddSelect>
        <AddCheckBox addCheckData={addCheckData}></AddCheckBox>
        <AddFileInput addFileData={addFileData}></AddFileInput>
      </div>
    </div>
  );
};

export default FormPage;
