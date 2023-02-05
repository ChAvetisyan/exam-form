import axios from "axios"

const Api = "https://crudcrud.com/api/ccee7b4be2e94b33851428236fd44c42/"

export const PostUsers = (data)=> {
    return axios.post(`${Api}users`, data)
}

export const GetUsers = (id) => {
    return axios.get(`${Api}users`)
}

export const GetUser = (id) => {
    return axios.get(`${Api}users`, id)
}