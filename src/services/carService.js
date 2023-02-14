import {apiService} from "./apiService";
import {urls} from "../configs";

const carService={
    getAll:(page=1)=>apiService.get(urls.cars.cars,{params:{page:page}}),
    create:(data)=>apiService.post(urls.cars.cars,data),
    update:(id,data)=>apiService.put(urls.cars.byId(id),data),
    delete:(id)=>apiService.delete(urls.cars.byId(id))
}

export {
    carService
}