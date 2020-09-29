import { api } from "./api-lib/api";

export const login = (payload) => {
  return api
    .post("/login", payload)
};

export const register = (payload) => {
  return api
    .post("/register", payload)
    
};

export const logout = () => {
  return api.post('/logout')
}
