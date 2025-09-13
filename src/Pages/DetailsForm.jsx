// on submit required validation will be handled by browser
// check for inpError each key if all keys are an empty string than means no error in form and proceed with form submission else break and show alert
// after form submit clear field values set it to default

// to add form fields on button click input and textarea
// add the component data in array of components
// add keys in state for input values and input error
// add validation for particular field

import InputField from "../components/InputField";
import Select from "../components/Select";
import Radio from "../components/Radio";
import Textfield from "../components/Textfield";
import CheckInput from "../components/CheckInput";
import ButtonFormSubmit from "../components/ButtonFormSubmit";

// state import
import useFormValues from "../store/formValues";

// validation components
import validateOnlyAlphabets from "../validation/ValidateOnlyAlphabets";
import SelectValidation from "../addFields/SelectValidation";

// components to add fields dynamically
import AddInput from "../addFields/AddInput";

import { useEffect, useState } from "react";
import AddTextArea from "../addFields/AddTextArea";
import AddRadio from "../addFields/AddRadio";
import AddSelect from "../addFields/AddSelect";
import AddCheckBox from "../addFields/AddCheckBox";
import AddFileInput from "../addFields/AddFileInput";
import FileInput from "../components/FileInput";

const DetailsForm = () => {
  // values from state
  const inputVal = useFormValues((state) => state.inpValues);
  const inputError = useFormValues((state) => state.inpError);
  const setInpValues = useFormValues((state) => state.setInpValues);
  const setErrValues = useFormValues((state) => state.setErrValues);
  const addInpKey = useFormValues((state) => state.addInpKey);
  const addErrorKey = useFormValues((state) => state.addErrorKey);
  const addInpKeyCheck = useFormValues((state) => state.addInpKeyCheck);

  // useEffect(() => {
  //   console.log("Input values from zustand");
  //   console.log(inputVal);
  // }, [inputVal]);

  // useEffect(() => {
  //   console.log("Error values from zustand");
  //   console.log(inputError);
  // }, [inputError]);

  // all edit functions

  const updateRadioFields = (key, label, optionLabel, required) => {
    let option = [];
    option = optionLabel.map((item) => {
      let upperCaseVal = item.toUpperCase();
      return { val: upperCaseVal, label: item };
    });

    let updatedField = [];

    updatedField = radioFields.map((item) => {
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
    setRadioFields(updatedField);
  };

  const updateCheckFields = (key, label, optionLabel, required) => {
    let option = [];
    option = optionLabel.map((item) => {
      let upperCaseVal = item.toUpperCase();
      return { val: upperCaseVal, label: item };
    });

    let updatedField = [];

    updatedField = checkFields.map((item) => {
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
    setCheckFields(updatedField);
  };

  const updateSelectFields = (key, label, optionLabel, required) => {
    let option = [];
    option = optionLabel.map((item) => {
      let upperCaseVal = item.toUpperCase();
      return { val: upperCaseVal, label: item };
    });
    option.unshift({ val: "", label: "Select from dropdown" });

    let updatedField = [];

    updatedField = selectFields.map((item) => {
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
    setSelectFields(updatedField);
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

    updatedField = inputFields.map((item) => {
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
    setInputFields(updatedField);

    let selectedValidation = SelectValidation(validation);
    console.log(selectedValidation);

    if (selectedValidation != null) {
      setValidation((prev) => ({
        ...prev,
        [key]: selectedValidation,
      }));
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

    updatedField = textAreaFields.map((item) => {
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
    setTextAreaFields(updatedField);

    let selectedValidation = SelectValidation(validation);
    console.log(selectedValidation);

    if (selectedValidation != null) {
      setValidation((prev) => ({
        ...prev,
        [key]: selectedValidation,
      }));
    }
  };

  const updateFileFields = (key, fileType, required, label) => {
    let acceptFileTypes = fileType.toString();
    let updatedField = [];

    updatedField = fileFields.map((item) => {
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
    setFileFields(updatedField);
  };
  const [validation, setValidation] = useState({
    name: validateOnlyAlphabets,
  });
  // validate according to name
  const validateFields = (key, value) => {
    let error = "";

    if (validation[key]) {
      error = validation[key](key, value);
    }

    return error;
  };

  // useEffect(() => {
  //   console.log("new validation added");
  //   console.log(validation);
  // }, [validation]);
  // to handle input and textarea change

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

  // input form fields
  const [inputFields, setInputFields] = useState([
    {
      key: "name",
      type: "text",
      inpLabel: "Full Name",
      inpPlaceholder: "Enter Fullname",
      inpMaxlength: 30,
      inpRequired: true,
      inpReadonly: false,
      inpMin: "",
      inpMax: "",
    },
    {
      key: "email",
      type: "text",
      inpLabel: "Email",
      inpPlaceholder: "Enter email",
      inpMaxlength: 20,
      inpRequired: true,
      inpReadonly: false,
      inpMin: "",
      inpMax: "",
    },
    {
      key: "password",
      type: "password",
      inpLabel: "Password",
      inpPlaceholder: "Enter Password",
      inpMaxlength: 20,
      inpRequired: true,
      inpReadonly: false,
      inpMin: "",
      inpMax: "",
    },
    {
      key: "mobile",
      type: "text",
      inpLabel: "Mobile",
      inpPlaceholder: "Enter mobile number",
      inpMaxlength: 10,
      inpRequired: false,
      inpReadonly: false,
      inpMin: "",
      inpMax: "",
    },
    {
      key: "dob",
      type: "date",
      inpLabel: "D.O.B.",
      inpPlaceholder: "Enter dob",
      inpMaxlength: 15,
      inpRequired: true,
      inpReadonly: false,
      inpMin: "",
      inpMax: "",
    },
  ]);

  // textarea form fields
  const [textAreaFields, setTextAreaFields] = useState([
    {
      key: "address",
      txtLabel: "Address",
      txtPlaceholder: "Enter address",
      txtMaxlength: 500,
      txtRequired: true,
      txtReadonly: false,
    },
  ]);

  // useEffect(() => {
  //   console.log("New input field added");
  //   console.log(inputFields);
  // }, [inputFields]);

  // useEffect(() => {
  //   console.log("New textarea field added");
  //   console.log(textAreaFields);
  // }, [textAreaFields]);

  // to handle radio and select change
  const handleRadioSelectChange = (key, value) => {
    setInpValues(key, value);
  };

  // radio form fields
  const [radioFields, setRadioFields] = useState([
    {
      key: "gender",
      name: "gender",
      radioReq: true,
      radioDisabled: false,
      radioLabel: "Gender",
      radioOption: [
        { val: "MALE", label: "Male" },
        { val: "FEMALE", label: "Female" },
      ],
    },
  ]);
  // useEffect(() => {
  //   console.log("New radio field added");
  //   console.log(radioFields);
  // }, [radioFields]);

  // select form fields
  const [selectFields, setSelectFields] = useState([
    {
      key: "state",
      selectLabel: "State",
      option: [
        { val: "", label: "Select state" },
        { val: "CHHATTISGARH", label: "Chhattisgarh" },
        { val: "MP", label: "Madhya Pradesh" },
        { val: "OTHER", label: "Other" },
      ],
      selectDisabled: false,
      selectRequired: true,
    },
  ]);

  // useEffect(() => {
  //   console.log("New select field added");
  //   console.log(selectFields);
  // }, [selectFields]);

  // to handle check value changes
  const handleCheckFileChange = (key, values) => {
    setInpValues(key, values);
  };

  // check form fields
  const [checkFields, setCheckFields] = useState([
    {
      key: "hobby",
      checkLabel: "Hobbies",
      checkRequired: true,
      checkDisabled: false,
      option: [
        {
          val: "READING",
          label: "Reading",
        },

        {
          val: "DANCING",
          label: "Dancing",
        },

        {
          val: "SINGING",
          label: "Singing",
        },
        {
          val: "CYCLING",
          label: "Cycing",
        },
      ],
    },
  ]);

  // useEffect(() => {
  //   console.log("New check field added");
  //   console.log(checkFields);
  // }, [checkFields]);

  // file input fields
  const [fileFields, setFileFields] = useState([
    {
      key: "file",
      label: "Select files",
      type: "file",
      multiple: true,
      accept: ".jpg",
      disabled: false,
      req: true,
      // handleChange: handleCheckChange,
    },
  ]);
  // useEffect(() => {
  //   console.log("New file field added");
  //   console.log(fileFields);
  // }, [fileFields]);

  const btnData = {
    btnType: "submit",
    btnDisabled: false,
    btnText: "Submit",
  };

  const handlePersonalDetailsSubmit = (event) => {
    event.preventDefault();
    console.log(inputVal);
    console.log(inputError);
  };

  const addInputData = {
    setFields: setInputFields,
    validationList: setValidation,
    addInpKey: addInpKey,
    addErrorKey: addErrorKey,
    inputVal: inputVal,
  };
  const addTextAreaData = {
    setFields: setTextAreaFields,
    validationList: setValidation,
    addInpKey: addInpKey,
    addErrorKey: addErrorKey,
    inputVal: inputVal,
  };

  const addRadioData = {
    setFields: setRadioFields,
    addInpKey: addInpKey,
    inputVal: inputVal,
  };
  const addSelectData = {
    setFields: setSelectFields,
    addInpKey: addInpKey,
    inputVal: inputVal,
  };
  const addCheckData = {
    setFields: setCheckFields,
    addInpKey: addInpKeyCheck,
    inputVal: inputVal,
  };

  const addFileData = {
    setFields: setFileFields,
    addInpKey: addInpKeyCheck,
    inputVal: inputVal,
  };
  return (
    <div>
      <form
        onSubmit={handlePersonalDetailsSubmit}
        style={{
          width: "100%",
          marginTop: "40px",
          marginBottom: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {inputFields.map((item) => (
          <InputField
            key={item.key}
            inpData={{
              ...item,
              val: inputVal,
              err: inputError,
              handleChange: handleInputChange,
              updateInputFields: updateInputFields,
              validationList: validation,
            }}
          ></InputField>
        ))}

        {textAreaFields.map((item) => (
          <Textfield
            key={item.key}
            textData={{
              ...item,
              handleChange: handleInputChange,
              updateTextFields: updateTextFields,
              val: inputVal,
              err: inputError,
              validationList: validation,
            }}
          ></Textfield>
        ))}

        {radioFields.map((item) => (
          <Radio
            key={item.key}
            radioData={{
              ...item,
              handleChange: handleRadioSelectChange,
              updateRadioFields: updateRadioFields,
              val: inputVal,
            }}
          ></Radio>
        ))}

        {selectFields.map((item) => (
          <Select
            key={item.key}
            selectData={{
              ...item,
              val: inputVal,
              handleChange: handleRadioSelectChange,
              updateSelectFields: updateSelectFields,
            }}
          ></Select>
        ))}

        {checkFields.map((item) => (
          <CheckInput
            key={item.key}
            checkData={{
              ...item,
              err: inputError,
              handleChange: handleCheckFileChange,
              updateCheckFields: updateCheckFields,
            }}
          ></CheckInput>
        ))}
        {fileFields.map((item) => (
          <FileInput
            key={item.key}
            fileData={{
              ...item,
              handleChange: handleCheckFileChange,
              updateFileFields: updateFileFields,
            }}
          ></FileInput>
        ))}
        <div
          style={{
            width: "70%",
            display: "flex",
            flexWrap: "wrap",
            marginBottom: "20px",
            justifyContent: "space-around",
          }}
        >
          <AddInput addInputData={addInputData}></AddInput>
          <AddTextArea addTextAreaData={addTextAreaData}></AddTextArea>
          <AddRadio addRadioData={addRadioData}></AddRadio>
          <AddSelect addSelectData={addSelectData}></AddSelect>
          <AddCheckBox addCheckData={addCheckData}></AddCheckBox>
          <AddFileInput addFileData={addFileData}></AddFileInput>
        </div>

        <ButtonFormSubmit btnData={btnData}></ButtonFormSubmit>
      </form>
    </div>
  );
};

export default DetailsForm;
