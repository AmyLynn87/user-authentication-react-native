//Libs
import axios from "axios";

//Local

const API_KEY = "AIzaSyAfg1g8YdHl2wPdaKfLtVfjm28JilMjyoE";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  return response.data.idToken;
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
