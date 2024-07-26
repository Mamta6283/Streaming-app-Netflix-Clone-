import axios from "axios";
import Authorization from "axios";

const instance = axios.create({
    baseURL:`http://api.themoviedb.org/3/`,
    // headers:{
    //  accept : "application/json",
    //  Authorization
    // }

})
export default instance;
