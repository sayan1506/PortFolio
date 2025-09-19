const express = require("express");
const { addContact, fetchContacts } = require("../controllers/contactController");

const router = express.Router();

router.post("/contact", addContact);
router.get("/contact", fetchContacts);

module.exports = router;
