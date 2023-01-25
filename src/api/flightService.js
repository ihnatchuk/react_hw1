import {axiosService} from "./axiosService";

export const flightService={
    getAll:()=>axiosService.get('').then(value=>value.data)
}