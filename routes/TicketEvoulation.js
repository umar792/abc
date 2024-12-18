const express = require("express");
const router = express.Router();
const controller = require("../Controllers/TicketEvoulationController");
const TokenVerify = require("../middleware/TokenVerify");

router.get("/create", TokenVerify, controller.createtranscation);

router.post("/get/all/transcation", TokenVerify, controller.allTrnscations);

router.post("/all/:id", controller.findAll);

router.post(
  "/search/:startDate/:endDate/:page/:lon/:lat",
  controller.findEentByDate
);

router.get("/details/:id", controller.EventDetails);

router.get("/event/details/:id", controller.TicketGroup);

router.post("/event/search/:name", controller.EventSearch);

router.get("/event/category/:id", controller.EventSearchByCategory);

router.post("/order/create", TokenVerify, controller.createOrder);

router.post("/order/create/multiple", controller.createOrdermultiple);

router.post("/client/create", controller.createClient);

router.get("/comp", controller.allcompanies);

router.get("/image", controller.getImageurl);

router.post("/tax/price" , controller.getTaxPrice)

module.exports = router;
