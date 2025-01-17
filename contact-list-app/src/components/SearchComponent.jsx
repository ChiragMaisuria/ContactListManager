import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as AppServices from "../services/api-services.js";

// Search TextField Component.
const SearchComponent = (props) => {
    
    // Async function to search the contact based on the input in the Search TextField in the UI.
  const seachKeywordTextFieldOnChange = async (event) => {
    // console.log("event.target.textContent: ", event.target.value);
    const searchedKeyword = event.target.value;
    const updatedContactList = await AppServices.searchByKeyword(
      searchedKeyword
    );
    props.updateContactList(updatedContactList);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: 500, maxWidth: "100%" }}>
          <TextField
            fullWidth
            placeholder="Search contacts"
            id="fullWidth"
            onChange={seachKeywordTextFieldOnChange}
          />
        </Box>
      </div>
    </>
  );
};

export default SearchComponent;
