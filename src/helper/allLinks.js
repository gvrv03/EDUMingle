import baseUrl from "./baseUrl";

// Auth
export const Fast2SMSURL = "https://www.fast2sms.com/dev/bulkV2";
export const SendSMSToUserURL = baseUrl + "api/SendOTP";
export const signInUserURL = baseUrl + "api/SignInUser";
export const checkUserExistURL = baseUrl + "api/CheckUserExists";
export const RegisterUserURL = baseUrl + "api/Register";
export const checkUserURL = baseUrl + "api/CheckLogin";

// Products
export const ProductsURL = baseUrl + "api/products";
export const getSingleProductURL = baseUrl + "api/products/Product/";
export const savedProductToFavoriteURL = baseUrl + "api/ProductSaved";
export const checkSavedProductURL = baseUrl + "api/CheckProductSaved";

// Payment
export const createOrderURL = baseUrl + "api/PaymentGateway/CreateOrder";
export const downloadProductURL = baseUrl + "api/ProductDown";
export const getOrderURL = baseUrl + "api/PaymentGateway/GetOrder";
export const getUserOrderURL = baseUrl + "api/GetUserOrders";


//Blogs
export const BlogsURL = baseUrl + "api/Blogs";
export const getSingleBlogURL = baseUrl + "api/Blogs/Post/";
