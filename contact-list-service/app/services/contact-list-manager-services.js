import ContactListManagerModel from "../models/contact-list-manager-model";

// Service to fetch all the contacts from the DB.
export const fetchAllContact = async () => {
    const contactsFetched = await ContactListManagerModel.find().exec();
    return contactsFetched;
}

// Service to save a new contact in the DB.
export const saveContact = async (newContact) => {
    const contactSaved = await newContact.save();
    return contactSaved;
}

// Service to delete a contact based on the id of that contact.
export const deleteContact = async (contactToDeleteId) => {
    const responseAfterDelete = await ContactListManagerModel.findByIdAndDelete(contactToDeleteId).exec();
    return responseAfterDelete;
}

// Service to search contact by name or email from the DB.
export const fetchContactByNameOrEmail = async (searchedKeyword) => {
    const contactsSearched = await ContactListManagerModel.find({
        $or: [
            {name: {$regex: searchedKeyword, $options: "i"}},
            {email: {$regex: searchedKeyword, $options: "i"}}
        ]
    }).exec();

    return contactsSearched;
}