import baseUrl from "./baseUrl";

// Auth
export const SendSMSToUserURL = baseUrl + "api/Auth/SendOTP";
export const createUserURL = baseUrl + "api/Auth/SignIn";
export const checkUserURL = baseUrl + "api/Auth/checkLogin";
