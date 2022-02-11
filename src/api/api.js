import * as axios from 'axios';


let instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "8310ed69-e472-483b-8455-512fe83d652d"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const getUsers = (currentPage = 1, pageSize = 100) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
}

export const unfollowAPI = (id) => {
    return instance.delete(`follow/${id}`)
}

export const followAPI = (id) => {
    return instance.post(`follow/${id}`, null)
}

export const isLogin = () => {
    return instance.get(`auth/me/`)
}//

export const userData = (userId) => {
    return instance.get(`profile/` + userId)
}

export const getStatus = (userId) => {
    return instance.get(`profile/status/` + userId)
}

export const updateStatus = (status) => {
    return instance.put(`profile/status/`, {
        status: status
    } )
}

export const Login = (email, pass, rememberMe) => {

    return instance.post(`auth/login`, 
     {email: email, password: pass, rememberMe: rememberMe}
  )
}

export const Logout = () => {

    return instance.delete(`auth/login`)
}

