import axios from "axios";
import {BASE_URL} from "../constants";

export const http = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
})