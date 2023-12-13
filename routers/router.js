const express = require("express");
const router = express.Router();

// Header роутер
const {
  getHeaderData,
  postHeaderData,
} = require("../controllers/headerDataController");

router.route("/header").get(getHeaderData).post(postHeaderData);

// Hero роутер
const {
  getHeroData,
  postHeroData,
} = require("../controllers/heroDataController");

router.route("/hero").get(getHeroData).post(postHeroData);

// Brands роутер
const {
  getBrandsData,
  postBrandsData,
} = require("../controllers/brandsDataController");

router.route("/brands").get(getBrandsData).post(postBrandsData);

// Future Here роутер
const {
  getFutureHereData,
  postFutureHereData,
} = require("../controllers/futureHereDataController");

router.route("/future-here").get(getFutureHereData).post(postFutureHereData);

// WhatIsGpt роутер
const {
  getWhatIsGptData,
  postWhatIsGptData,
} = require("../controllers/whatIsGptDataController");

router.route("/what-is-gpt").get(getWhatIsGptData).post(postWhatIsGptData);

// EarlyAccess роутер
const {
  getEarlyAccessData,
  postEarlyAccessData,
} = require("../controllers/earlyAccessDataController");

router.route("/early-access").get(getEarlyAccessData).post(postEarlyAccessData);

// End роутер
const {
  getEndData,
  postEndData,
} = require("../controllers/endDataController");

router.route("/end").get(getEndData).post(postEndData);

// News роутер
const {
  getNewsData,
  postNewsData,
} = require("../controllers/newsDataController");

router.route("/news").get(getNewsData).post(postNewsData);

// RegistrationBar роутер
const {
  getRegistrationBarData,
  postRegistrationBarData,
} = require("../controllers/registrationBarDataController");

router.route("/registrationBar").get(getRegistrationBarData).post(postRegistrationBarData);

module.exports = router;
