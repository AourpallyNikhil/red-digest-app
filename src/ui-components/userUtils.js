
// userUtils.js

import { API, graphqlOperation } from "aws-amplify";
import { createUser, getUser } from "./mutations"; // Import the GraphQL mutations and queries
import CryptoJS from "crypto-js";

// Function to create a new User record in the database
export const createNewUser = async (emailAddress) => {
  try {
    // Make sure emailAddress is not empty before creating a record
    if (emailAddress.trim() !== "") {
      const emailHash = CryptoJS.SHA256(emailAddress).toString(CryptoJS.enc.Hex);

      const newUser = {
        id: emailHash,
        emailAddress,
      };

      // Use GraphQL mutation to create a new User record
      await API.graphql(
        graphqlOperation(createUser, { input: newUser })
      );

      console.log("User created successfully!");
      return true; // Return true to indicate success
    }
    return false; // Return false to indicate that emailAddress was empty
  } catch (error) {
    console.error("Error creating user:", error);
    return false; // Return false in case of an error
  }
};

// Function to get a user by emailHash
export const getUserByEmail = async (emailHash) => {
  console.log("emailHash", emailHash);
  try {
    const response = await API.graphql(
      graphqlOperation(getUser, { emailHash: emailHash })
    );

    return response.data.getRedDigestModel;
  } catch (error) {
    console.error("Error getting user by emailHash:", error);
    return null; // Return null in case of an error
  }
};
