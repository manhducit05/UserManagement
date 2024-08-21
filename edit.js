const patchMethod = (data)=>{
  fetch('https://dummyjson.com/users/2', {
    method: 'PUT', /* or PATCH */
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(console.log);
}
export const editUser = ()=>{
  
}

