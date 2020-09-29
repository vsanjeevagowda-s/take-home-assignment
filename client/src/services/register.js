import { api } from "./api-lib/api";

export const register = (payload) => {
  return api
    .post("/register", payload)
    .then((resp) => {
      debugger;
    });
};
