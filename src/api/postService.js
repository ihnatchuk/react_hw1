import {urls} from "../configs";
import {axiosService} from "./axiosService";

const postService={
    getAll:()=>axiosService.get(urls.posts),
    getById:(id)=>axiosService.get(`${urls.posts}/${id}`)
}

export {
    postService
}