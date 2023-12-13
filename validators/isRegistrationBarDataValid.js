const { isObjectHasProps } = require("./utils/validators");

const validateRegistrationData = (data) => {
  // Проверяем объект headerData на наличие полей и соответствие типу "объект"
  const headerData = data.headerData;
  isObjectHasProps(headerData, ["description"]);

  // Проверяем объект miniHeaderData на наличие полей и соответствие типу "объект"
  const miniHeaderData = data.miniHeaderData;
  isObjectHasProps(miniHeaderData, ["description"]);

  // Проверяем объект buttonsData на наличие полей и соответствие типу "объект"
  const buttonsData = data.buttonsData;
  isObjectHasProps(buttonsData, ["title", "href"]);
};

module.exports = validateRegistrationData;
