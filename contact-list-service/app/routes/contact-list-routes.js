import express from "express";
import * as ContactListController from "../controllers/contact-list-manager-controllers.js";

const router = express.Router();

// Route: Search keyword
router.route("/search/:searchedKeyword").get(ContactListController.getContactByNameOrEmail);

// Route: To get all contacts, To add a new contact, and To remove an existing contact.
router
  .route("/")
  .get(ContactListController.getAllContact)
  .post(ContactListController.addNewContact)
  .delete(ContactListController.removeContact);


export default router;
