export const checkValidData = (email, password) => {
    const isEmailValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)
    if (!isEmailValid) return "email is not valid";
    if (!isPasswordValid) return "password is not valid";

    return null;
};