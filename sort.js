import { params } from "./params.js";
import { DrawUser } from "./drawUser.js";
export const sort = (API_User)=>{
  const sortItems = document.querySelectorAll('.sortItem')
  sortItems.forEach(element => {
    element.addEventListener('click',()=>{
      params.sort = element.getAttribute('value');
       API_User = `http://localhost:3000/users?q=${params.q}&_sort=${params.sort}&_order=asc&_page=${params.page}&_limit=${params.limit}`;
      console.log(API_User);
      DrawUser(API_User);
    })
  });
}
