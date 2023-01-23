import axios from "axios";

export const axiosService=()=>axios.create({baseUrl:'https://jsonplaceholder.typicode.com/'})