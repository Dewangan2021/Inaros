import { create } from "zustand";
import { produce } from "immer";

const useFormValuesTest = create((set) => ({
  submitStatus: false,
  inpValues: {},
  inpError: {},
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
