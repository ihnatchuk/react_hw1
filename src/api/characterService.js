import {axiosService} from "./axiosService";

export const characterService={
    getAll:()=>axiosService.get('/character'),
}