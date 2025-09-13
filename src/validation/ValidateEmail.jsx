//  validation for email
  const validateEmail = (key, val) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;
    if (!emailPattern.test(val) && val) {
      return "Enter valid email";
    } else {
      return "";
    }
  };

  export default validateEmail;