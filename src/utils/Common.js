export const getUser = () =>{
    const userStr = localStorage.getItem("email");
    if (userStr) return JSON.parse(userStr);
    else return null;
}

export const getToken = () =>{
    return localStorage.getItem("token")|| null;
}

export const setUserSession = (token,email) =>{
    localStorage.setItem("token", token);
    localStorage.setItem("email",email);
}

export const removeUserSession = ( ) => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
     
}
