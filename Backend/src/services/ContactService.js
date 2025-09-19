const Contact = require("../models/ContactSchema");

 const createContact = async (data) => {
  try {
    const contact = new Contact(data);
    return await contact.save();
  } catch (err) {
    throw new Error("Error saving contact: " + err.message);
  }
};

 const getContacts = async () => {
  try {
    return await Contact.find();
  } catch (err) {
    throw new Error("Error fetching contacts: " + err.message);
  }
};


module.exports = {createContact,getContacts}