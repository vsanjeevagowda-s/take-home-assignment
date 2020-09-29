import { api } from "./api-lib/api";

export const login = (payload) => {
  return api
    .post("/login", payload)
    .then((resp) => {
      debugger;
    });
};
