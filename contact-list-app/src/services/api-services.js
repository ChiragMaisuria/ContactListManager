const serverURL = "http://localhost:3000/contactlistmanager";

// Service to get all the contacts.
export const getAllContact = async () => {
    const response = await fetch(`${serverURL}/`, { method: "GET" });
    return response.json();
}

// Service to add new contact in the contact list.
export const addNewContact = async (body) => {
    const response = await fetch(`${serverURL}/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      return response.json();
}

// Service to delete a contact from the contact list.
export const deleteContactById = async (param) => {
    const query = new URLSearchParams(param);
    const response = await fetch(`${serverURL}?${query.toString()}`, {
        method: "DELETE"
    });
    return response.json();
}

// Service to search a contact by the name or email present in the contact details.
export const searchByKeyword = async (keyword) => {
    if(keyword!=""){
        const response = await fetch(`${serverURL}/search/${keyword}`, {
            method: "GET"
        });
        return response.json();
    }

    return getAllContact();
}