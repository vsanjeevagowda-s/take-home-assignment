const ROOT_PATH="http://localhost:8080/api"

export const instances = () => {
  return new Promise( (resolve, reject) => {
    fetch(`${ROOT_PATH}/instances`)
    .then(resp => resp.json)
    .then(resp => {
      debugger
    })
  })
  
};
