const { isObjectHasProps, isArrayHasLength } = require("./utils/validators");

const validateFooterData = (data) => {
  // Проверяем объект upperContainerData на наличие полей и соответствие типу "объект"
  const upperContainerData = data.upperContainerData;
  isObjectHasProps(upperContainerData, ["header", "cta", "href"]);

  // Проверяем объект leftLowerContainerData на наличие полей и соответствие типу "объект"
  const leftLowerContainerData = data.leftLowerContainerData;
  isObjectHasProps(leftLowerContainerData, ["img", "adress"]);
  isObjectHasProps(leftLowerContainerData.img, ["src", "alt"]);
  isObjectHasProps(leftLowerContainerData.adress, ["coords", "location", "reservedRights"]);
  isObjectHasProps(leftLowerContainerData.adress.coords, [
    "lat",
    "lon",
  ]);
  isObjectHasProps(leftLowerContainerData.adress.location, [
    "city",
    "country",
  ]);

  // Проверяем массив subHrefData на наличие полей и соответствие типу "массив"
  const subHrefData = data.subHrefData;
  isArrayHasLength(subHrefData);
  subHrefData.forEach((item) => isObjectHasProps(item, ["title", "href"]));

  // Проверяем массив subCompanyData на наличие полей и соответствие типу "массив"
  const subCompanyData = data.subCompanyData;
  isArrayHasLength(subCompanyData);
  subCompanyData.forEach((item) => isObjectHasProps(item, ["title", "href"]));

  // Проверяем массив subContactsData на наличие полей и соответствие типу "массив"
  const subContactsData = data.subContactsData;
  isArrayHasLength(subContactsData);
  subContactsData.forEach((item) => isObjectHasProps(item, ["title", "href"]));

  // Проверяем массив rightLowerContainerData на наличие полей и соответствие типу "массив"
  const rightLowerContainerData = data.rightLowerContainerData;
  isArrayHasLength(rightLowerContainerData);
  rightLowerContainerData.forEach((item) =>
    isObjectHasProps(item, ["header", "sub"])
  );

  // Проверяем объект licenseData на наличие полей и соответствие типу "объект"
  const licenseData = data.licenseData;
  isObjectHasProps(licenseData, ["title"]);
};

module.exports = validateFooterData;
