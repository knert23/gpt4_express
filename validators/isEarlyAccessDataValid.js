const { isObjectHasProps } = require("./utils/validators");

const validateEarlyAccessData = (data) => {
  // Проверяем объект leftEarlyAccessData на наличие полей и соответствие типу "объект"
  isObjectHasProps(data.leftEarlyAccessData, ["src", "alt"]);

  // Проверяем объект rightEarlyAccessData на наличие полей и соответствие типу "объект"
  const rightData = data.rightEarlyAccessData;
  isObjectHasProps(rightData, [
    "header",
    "description",
    "mini_header",
    "cta",
    "href",
  ]);
};

module.exports = validateEarlyAccessData;
