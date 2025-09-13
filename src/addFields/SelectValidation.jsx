
// validation import
import validateOnlyAlphabets from "../validation/ValidateOnlyAlphabets";
import validatePassword from "../validation/ValidatePassword";
import validateEmail from "../validation/ValidateEmail";
import validateMobile from "../validation/ValidateMobile";

export const validationlist = ["validateOnlyAlphabets", "validateMobile", "validateEmail", "validatePassword"];

const SelectValidation = (validation) => {


 if(validation == "validateOnlyAlphabets"){
    return validateOnlyAlphabets;
 }else if(validation == "validateMobile"){
   return validateMobile;
 }else if(validation == "validateEmail"){
   return validateEmail;
 }else if(validation == "validatePassword"){
   return validatePassword;
 }else{
   return null;
 }
};

export default SelectValidation;