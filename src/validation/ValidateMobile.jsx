//  validation for mobile number
  const validateMobile = (key, val) => {
    const mobilePattern = /^[1-9][0-9]{9}$/;
    if (!mobilePattern.test(val) && val) {
      return "Enter valid mobile number";
    } else {
      return "";
    }
  };

  export default validateMobile;