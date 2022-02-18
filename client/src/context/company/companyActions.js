export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START",
  });
  
   export const LoginSuccess = (company) => ({
    type: "LOGIN_SUCCESS",
    payload: company,
  });
  
   export const LoginFailure = () => ({
    type: "LOGIN_FAILURE",
  });
  
   export const Logout = () => ({
    type: "LOGOUT",
  });
  