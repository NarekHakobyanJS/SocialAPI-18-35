import axios from 'axios';

const instance = axios.create({
    baseURL : `https://social-network.samuraijs.com/api/1.0`,
    withCredentials : true,
    headers : {
        "API-KEY" : '3942348e-0f62-40e2-a126-0216d80a64be'
    }
});

export const SocialAPI = {
    getUsers(page = 1){
        return instance.get(`/users?count=100&page=${page}`)
    },
    getUserProfile(userId){
        return instance.get(`/profile/${userId}`)
    },
    login(body){
        return instance.post(`/auth/login`, body)
    },
    changeAvatar(file){
        const formdata = new FormData()
        formdata.append('file', file)
        return instance.put('/profile/photo', formdata)
    }
}