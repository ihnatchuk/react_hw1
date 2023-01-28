import {urls} from "../configs";
import {axiosService} from "./axiosService";

const albumsService={
    getAll:()=>axiosService.get(urls.albums),
    getById:(id)=>axiosService.get(`${urls.albums}/${id}`)
}

export {
    albumsService
}