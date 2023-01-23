import {axiosService} from "./axiosService";

export const usersService={
    getAll:()=>axiosService.get('/users'),
    getUserById:(id)=>axiosService.get(`/users/${id}`)
}