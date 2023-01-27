import {axiosService} from "./axiosService";
import {urls} from "../configs";

const postService={
    getAll:()=>axiosService.get('/posts'),
    getById:(id)=>axiosService.get(`${urls.posts}/${id}`)
}

export {
    postService
}
