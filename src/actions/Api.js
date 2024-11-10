import axios from "axios";
import { base_url } from "../constants/base_url";

export const Api = axios.create({
    baseURL : base_url,
    headers: {
        "Authorization" : `bearer`
    }
})