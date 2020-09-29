import { api } from "./api-lib/api";

export const instances = () => {
  return api
    .get("/instances")
};