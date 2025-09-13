  
  
  //  validation for only alphabets
  const validateOnlyAlphabets = (key, val) => {
    const alphaPattern = /^[A-Za-z ]+$/;
    if (!alphaPattern.test(val) && val) {
      return "Enter valid value";
    } else {
      return "";
    }
  };

  export default validateOnlyAlphabets;