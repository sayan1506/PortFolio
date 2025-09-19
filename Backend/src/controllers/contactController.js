const { createContact, getContacts } = require("../services/ContactService");

const addContact = async (req, res) => {
  try {
    const savedContact = await createContact(req.body);
    res.status(201).json(savedContact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const fetchContacts = async (req, res) => {
  try {
    const contacts = await getContacts();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {addContact,fetchContacts}
