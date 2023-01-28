import {urls} from "../configs";
import {axiosService} from "./axiosService";

const commentsService={
    getAll:()=>axiosService.get(urls.comments),
    getById:(id)=>axiosService.get(`${urls.comments}/${id}`)
}

export {
    commentsService
}