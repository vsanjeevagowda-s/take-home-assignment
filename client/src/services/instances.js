import { api } from "./api-lib/api";

export const instances = () => {
  return api
    .get("/instances")
};

export const updateInstance = ({nextStatus, id}) => {
  return api.get(`/instances/${nextStatus}/${id}`)
}