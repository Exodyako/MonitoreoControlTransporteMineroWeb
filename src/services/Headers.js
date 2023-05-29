export function header(){
    const token = localStorage.getItem("token");
    console.log("obtiene"+token);
    return {
    "Accept":"application/json",
    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`
}
};