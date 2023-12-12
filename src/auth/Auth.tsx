// Function to set the authentication token in localStorage
export const setAuthToken = (token:string) => {
    localStorage.setItem('authToken', token);
  };
  
  // Function to get the authentication token from localStorage
  export const getAuthToken = () : string | null => {
    return localStorage.getItem('authToken');
  };
  
  // Function to check if the user is authenticated
  export const isAuth = () : boolean => {
    const authToken = getAuthToken();
    return !!authToken; // Returns true if authToken is present, false otherwise
  };





//   const handleLogin = () => {
//     const token = 'yourAuthToken'; // Replace with the actual authentication token
//     setAuthToken(token);
//   };


//   import { isAuth, setAuthToken } from './Auth';


//   // Check if the user is authenticated
//   const isAuthenticated = isAuth();

