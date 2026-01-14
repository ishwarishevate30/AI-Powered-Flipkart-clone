import axios from 'axios';

const URL = 'http://localhost:8000';

export const authenticateSignup = async (data) => {
  try {
    console.log('Payload being sent to /signup:', data); // Debugging log
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log('Error while calling signup API', error.response || error.message || error);
  }
};

export const authenticateLogin = async (data) => {
  try {
    console.log('Payload being sent to /login:', data); // Debugging log
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log('Error while calling login API', error.response || error.message || error);
  }
};