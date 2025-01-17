import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PersonRemoveAlt1Icon from "@mui/icons-material/PersonRemoveAlt1";
import * as AppServices from "../services/api-services.js";

// ContactList component - displays the entire contact list.
const ContactListComponent = (props) => {
  const contactList = props.listOfContact;

  const deleteContact = async (idToDelete) => {
    await AppServices.deleteContactById({ id: idToDelete });
    props.refreshContactList();
  };

  return (
    <>
      {/* Div to center the table*/}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TableContainer sx={{ maxWidth: "90vw" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {contactList.map((contact) => (
                <TableRow
                  key={contact._id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  {/* Cell-1: Display icon */}
                  <TableCell align="center" sx={{ flex: 1 }}>
                    <PermIdentityIcon
                      style={{ fontSize: 30 }}
                    ></PermIdentityIcon>
                  </TableCell>
                  {/* Cell-2: Display the name of the contact. */}
                  <TableCell align="left" sx={{ flex: 1 }}>
                    {contact.name}
                  </TableCell>
                  {/* Cell-3: Displays the email of the contact */}
                  <TableCell align="left" sx={{ flex: 1 }}>
                    {contact.email}
                  </TableCell>
                  {/* Cell-4: Displays the button to delete the contact from the contact list manager */}
                  <TableCell align="center" sx={{ flex: 1 }}>
                    <button
                      onClick={(event) => {
                        deleteContact(contact._id);
                      }}
                      style={{
                        background: "#FF8E8E",
                        border: "none",
                        borderRadius: 20,
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "space-between",
                        padding: 3,
                        cursor: "pointer",
                      }}
                    >
                      <PersonRemoveAlt1Icon
                        style={{ color: "white", marginLeft: 20 }}
                      ></PersonRemoveAlt1Icon>

                      <span
                        style={{
                          fontSize: 18,
                          color: "white",
                          marginLeft: 20,
                          marginRight: 20,
                        }}
                      >
                        Remove
                      </span>
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default ContactListComponent;
