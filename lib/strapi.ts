import axios from "axios";

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";

export const api = axios.create({
  baseURL: `${STRAPI_URL}/api`,
});
