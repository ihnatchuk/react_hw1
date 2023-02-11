import {apiService} from "./apiService";
import {urls} from "../configs";

const carService={
    getAll:()=>apiService.get(urls.cars.cars),
    create:(data)=>apiService.post(urls.cars.cars,data),
    update:(id,data)=>apiService.put(urls.cars.byId(id),data),
    delete:(id)=>apiService.delete(urls.cars.byId(id))
}

export {
    carService
}