import * as ContactListServices from '../services/contact-list-manager-services.js';
import { setResponse, setError } from './request-handler.js';
import ContactListManagerModel from '../models/contact-list-manager-model.js';

// Controller: To get all the contact.
export const getAllContact = async (request, response) => {
    // console.log("getAllContact");
    try{
        const allContacts = await ContactListServices.fetchAllContact();
        setResponse(allContacts, response);
    }catch(err){
        setError(err, response);
    }
}

// Controller: To handle adding new contact to the DB.
export const addNewContact = async (request, response) => {
    try{
        const receivedContactObj = {...request.body};
        const newContactObject = new ContactListManagerModel(receivedContactObj);
        const responseFromServices = await ContactListServices.saveNewContact(newContactObject);
        setResponse(responseFromServices, response);
    }catch(err){
        setError(err, response);
    }
}

// Controller: To handle deletion of a contact.
export const removeContact = async (request, response) => {
    // console.log("removeContact");
    try{
        const deleteContactId = request.query.id;
        // console.log("deleteContactId: ", deleteContactId);
        const deleteResponseFromServices = await ContactListServices.deleteContact(deleteContactId);
        setResponse(deleteResponseFromServices, response);
    }catch(err){
        setError(err, response);
    }
}

// Controller: To handle the search functionality.
export const getContactByNameOrEmail = async (request, response) => {
    // console.log("getContactByNameOrEmail");
    try{
        const searchedKeyword = request.params.searchedKeyword;
        // console.log("searchedKeyword: ", searchedKeyword);
        const fetchedContacts = await ContactListServices.fetchContactByNameOrEmail(searchedKeyword);
        setResponse(fetchedContacts, response);
    }catch(err){
        setError(err, response);
    }
}


