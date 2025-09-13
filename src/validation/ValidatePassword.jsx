//  validation for password
  const validatePassword = (key, val) => {
    const passPattern =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?])[a-zA-Z\d!@#$%^&*()_+[\]{};':"\\|,.<>/?]{8,}$/;
    if (!passPattern.test(val) && val) {
      return "Must contain at least 1 uppercase, 1 lowercase , 1 digit, 1 special character and minimum length 8";
    } else {
      return "";
    }
  };

  export default validatePassword;