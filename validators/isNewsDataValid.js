const { isObjectHasProps, isArrayHasLength } = require("./utils/validators");

const validateBlogData = (data) => {
  // Проверяем объект headerData на наличие полей и соответствие типу "объект"
  const headerData = data.headerData;
  isObjectHasProps(headerData, ["title"]);

  // Проверяем объект leftNewsInfoData на наличие полей и соответствие типу "объект"
  const leftNewsInfoData = data.leftNewsInfoData;
  isObjectHasProps(leftNewsInfoData, ["src", "date", "title", "href"]);

  // Проверяем массив rightNewsInfoData на наличие полей и соответствие типу "массив"
  const rightNewsInfoData = data.rightNewsInfoData;
  isArrayHasLength(rightNewsInfoData);
  rightNewsInfoData.forEach((item) =>
    isObjectHasProps(item, ["src", "alt", "date", "title", "href"])
  );
};

module.exports = validateBlogData;
