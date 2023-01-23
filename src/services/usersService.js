import {axiosService} from "./axiosService";

export const usersService={
    getAll:()=>axiosService.get('/users'),
    getUserById:(id)=>axiosService.get(`/users/${id}`),
    getUserPosts:(id)=>axiosService.get(`/users/${id}/posts`),
    getPostById:(postId)=>axiosService.get(`/posts/${postId}`),
    getPostComments:(postId)=>axiosService.get(`/posts/${postId}/comments`)
}