import axios from "axios";

const url = process.env.NEXT_PUBLIC_DB_URI;

export const API = axios.create({ baseURL: url });
