import axiosInstance from '../axios/axios'

//signup
export const userSignup = (values) => {
    return axiosInstance().post("/signup", { ...values }, { headers: { "Content-Type": "multipart/form-data" } });
}

export const getUserDetails = () => {
    return axiosInstance().get("/getDetails");
}

export const updateProfile=(values)=>{
    return axiosInstance().put("/updateUser", { ...values }, { headers: { "Content-Type": "multipart/form-data" } })
}