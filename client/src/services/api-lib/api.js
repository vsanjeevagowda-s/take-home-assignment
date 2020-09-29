const ROOT_API_URL = "/api";
/* global fetch */
/* global localStorage */

const setHeaders = () => {
  return localStorage.getItem("token");
};

const headers = () => {
  return {
    "Content-Type": "application/json",
    authorization: setHeaders() || "",
  };
};

export const api = {
  get: (path) => {
    return new Promise((resolve, reject) => {
      return fetch(`${ROOT_API_URL}${path}`, {
        headers: headers(),
      })
        .then((resp) => resp.json())
        .then((resp) => {
          
          return resolve(resp);
        })
        .catch((error) => {
          console.error('error', error)
          reject(error);
        });
    });
  },
  post: (path, payload) => {
    payload = {
      method: "post",
      body: JSON.stringify(payload),
      headers: headers(),
    };
    return new Promise((resolve, reject) => {
      return fetch(`${ROOT_API_URL}${path}`, payload)
        .then((resp) => {
					const authorization = resp.headers.get('authorization');
          if(authorization) localStorage.setItem('token', `Bearer ${authorization}`)
          return resp.json();
        })
        .then((resp) => {
          
          if(resp.success) return resolve(resp);
          if(!resp.success) return reject(resp);
        })
        .catch((error) => {
          console.error('error', error)
          reject(error);
        });
    });
  },
};
