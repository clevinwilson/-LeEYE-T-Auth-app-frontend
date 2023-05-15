import axiosInstance from '../axios/axios'

//signup
export const userSignup = (values) => {
    return axiosInstance().post("/signup", { ...values });
}