const isEarlyAccessDataValid = require("../validators/isEarlyAccessDataValid");

const {
  getEarlyAccessDataModel,
  postEarlyAccessDataModel,
} = require("../model/files/earlyAccessDataModel");

const getEarlyAccessData = (req, res, next) => {
  try {
    const data = getEarlyAccessDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postEarlyAccessData = (req, res, next) => {
  try {
    const data = req.body;

    // валидируем данные
    // если невалидны, то бросит ошибку
    isEarlyAccessDataValid(data);

    // если с данными все ок, тогда пишем в файл через модель файлов
    postEarlyAccessDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getEarlyAccessData, postEarlyAccessData };
