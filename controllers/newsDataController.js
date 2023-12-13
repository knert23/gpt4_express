const isNewsDataValid = require("../validators/isNewsDataValid");

const {
  getNewsDataModel,
  postNewsDataModel,
} = require("../model/files/newsDataModel");

const getNewsData = (req, res, next) => {
  try {
    const data = getNewsDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postNewsData = (req, res, next) => {
  try {
    const data = req.body;

    // валидируем данные
    // если невалидны, то бросит ошибку
    isNewsDataValid(data);

    // если с данными все ок, тогда пишем в файл через модель файлов
    postNewsDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getNewsData, postNewsData };
