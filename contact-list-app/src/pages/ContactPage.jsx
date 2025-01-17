import React, { useEffect } from "react";

import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import ContactListComponent from "../components/ContactListComponent";
import SearchComponent from "../components/SearchComponent";
import ContactModel from "../models/ContactModel.js";
import * as AppServices from "../services/api-services.js";

// Transition for the dialog form to add new contact.
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ContactPage = () => {
  // Use state for the list of contacts.
  const [contactList, setContactList] = React.useState([]);

  // Use state for contact name.
  const [newContactName, setNewContactName] = React.useState("");

  // Use state for contact email.
  const [newContactEmail, setNewContactEmail] = React.useState("");

  // Async function to handle the submission of form to add new contact.
  const addNewContact = async (event) => {
    // Prevent default behaviour of form submission.
    event.preventDefault();
    // Add new contact.
    await AppServices.addNewContact({
      name: newContactName,
      email: newContactEmail,
    });
    populateContactList();
    setNewContactName("");
    setNewContactEmail("");
    handleClose();
  };

  // Handles open and close state for the dialog.
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // 1-way to define styles in React. Also, could be done inline as done with other components and elements.
  const styles = {
    headerText: {
      textAlign: "center",
    },
  };

  //   Async function to make the api call to fetch the contacts from the Backend and populate the contact list.
  const populateContactList = async () => {
    const fetchedContactList = await AppServices.getAllContact();
    // console.log("getAllContactResponse: ", fetchedContactList);
    setContactList(fetchedContactList);
  };

  //   useEffect hook to invoke the populateContactList() function after the page renders.
  useEffect(() => {
    populateContactList();
  }, []);

  return (
    <>
      {/* Header */}
      <nav>
        <h2 style={styles.headerText}>- Contacts List Manager -</h2>
      </nav>
      <hr />

      {/* Search box  */}
      <br></br>
      <SearchComponent
        refreshContactList={populateContactList}
        updateContactList={setContactList}
      ></SearchComponent>
      <br></br>

      {/*  Button to add new contact to the contact list - onClick will open the dialog form to enter new contact details.*/}
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button
          onClick={handleClickOpen}
          style={{
            background: "#97D6A0",
            border: "none",
            borderRadius: 20,
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
            padding: 5,
            cursor: "pointer",
          }}
        >
          <span
            style={{
              fontSize: 18,
              color: "white",
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            Add Contact
          </span>
        </button>
      </div>

      {/* Dialog Form */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          sx={{ fontSize: 25, textAlign: "center", fontWeight: "bold" }}
        >
          {"Add New Contact"}
        </DialogTitle>
        <hr style={{ width: 400 }} />
        <DialogContent>
          {/* Form to get user input about new name and new email for the new contact the user wants to add. */}
          <form onSubmit={addNewContact}>
            {/* Input field to add name for the contact*/}
            <input
              type="text"
              value={newContactName}
              placeholder="Enter contact name"
              style={{ fontSize: 20, width: "30vw", padding: 10 }}
              onChange={(event) => {
                setNewContactName(event.target.value);
              }}
            ></input>
            <br />
            <br />
            {/* Input field to add email for the contact */}
            <input
              type="email"
              value={newContactEmail}
              placeholder="Enter contact email id"
              style={{ fontSize: 20, width: "30vw", padding: 10 }}
              onChange={(event) => {
                setNewContactEmail(event.target.value);
              }}
            ></input>
            <br />
            <br />
            {/* Button to submit the form that will add the new contact details to the contactListManager */}
            <button
              type="submit"
              style={{
                backgroundColor: "#97D6A0",
                border: "none",
                width: "100%",
                fontSize: 20,
                fontWeight: "semi-bold",
                color: "white",
                padding: 10,
                borderRadius: 20,
                cursor: "pointer",
              }}
            >
              Add new contact
            </button>
          </form>
        </DialogContent>
      </Dialog>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {/* Ternary condition: If there are no contacts, it will display "No contacts found!" and if there are contacts, it will render all the contacts in the table list format */}
      {contactList.length == 0 ? (
        <p style={{ textAlign: "center" }}>No Contacts Found!</p>
      ) : (
        <ContactListComponent
          listOfContact={contactList}
          refreshContactList={populateContactList}
        ></ContactListComponent>
      )}
    </>
  );
};

export default ContactPage;
