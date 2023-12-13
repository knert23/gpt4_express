const isRegistrationBarDataValid = require("../validators/isRegistrationBarDataValid");

const {
  getRegistrationBarDataModel,
  postRegistrationBarDataModel,
} = require("../model/files/registrationBarDataModel");

const getRegistrationBarData = (req, res, next) => {
  try {
    const data = getRegistrationBarDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postRegistrationBarData = (req, res, next) => {
  try {
    const data = req.body;

    // валидируем данные
    // если невалидны, то бросит ошибку
    isRegistrationBarDataValid(data);

    // если с данными все ок, тогда пишем в файл через модель файлов
    postRegistrationBarDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getRegistrationBarData, postRegistrationBarData };
