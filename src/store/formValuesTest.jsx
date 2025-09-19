import { create } from "zustand";
import { produce } from "immer";
import { persist } from "zustand/middleware";

const useFormValuesTest = create((set) => ({
  submitStatus: false,
  inpValues: {
    name:"",
  },
  inpError: {
    name : "",
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
  addInpKey: (key) =>
    set(
      produce((state) => {
        state.inpValues[key] = "";
      })
    ),
  addInpKeyCheck: (key) =>
    set(
      produce((state) => {
        state.inpValues[key] = [];
      })
    ),
  addErrorKey: (key) =>
    set(
      produce((state) => {
        state.inpError[key] = "";
      })
    ),
  setSubmitStatus: () => set({ submitStatus: true }),
}));

export default useFormValuesTest;
