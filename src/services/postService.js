import {axiosService} from "./axiosService";

export const postService= {
    getAll:()=>axiosService.get('/posts'),
    getPost:(id)=>axiosService.get(`/posts/${id}`),
}