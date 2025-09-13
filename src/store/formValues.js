import { create } from "zustand";
import { produce } from "immer";

const useFormValues = create((set) => ({
  inpValues: {
    name: "",
    password: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "",
    address: "",
    state: "",
  },
  inpError: {
    name: "",
    password: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "",
    address: "",
    state: "",
  },
  setInpValues: (key, value) =>
    set(
      produce((state) => {
        state.inpValues[key] = value;
      })
    ),
      setErrValues: (key, value) =>
    set(
      produce((state) => {
        state.inpError[key] = value;
      })
    ),
    addInpKey : (key) => set(
      produce((state) => {
        state.inpValues[key] = "";
      })
    ),
      addInpKeyCheck : (key) => set(
      produce((state) => {
        state.inpValues[key] = [];
      })
    ),
    addErrorKey : (key) => set(
       produce((state) => {
        state.inpError[key] = "";
      })
    )
}));

export default useFormValues;
